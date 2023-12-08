const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function loadHTMLFromURL(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error loading HTML:', error);
    return null;
  }
}

function splitString(string) {
    const regex = /^(\d+)\.\s(.*)\s\((.*)\)\s:\s(.*)$/;
    const matches = string.match(regex);

    if (matches) {
        const [, number, japanese, pronunciation, meaning] = matches;
        return {
            japanese,
            pronunciation,
            meaning
        };
    }

    return null;
}

async function exec() {
    const regex = /^\d+\..*\(.+\)\s:\s.*/;
    const delay = 500; // Delay in milliseconds

    for (let i = 1; i <= 17; i++) {
        const url = `https://learnjapanesedaily.com/most-common-japanese-words.html/${i}`;
        const html = await loadHTMLFromURL(url);
        const $ = cheerio.load(html);
        const paragraphs = $('p');

        const filteredParagraphs = paragraphs.filter((index, element) => {
            return regex.test($(element).text());
        });

        const createCsvWriter = require('csv-writer').createObjectCsvWriter;

        filteredParagraphs.each((index, element) => {
            const paragraphText = $(element).text();
            const data = splitString(paragraphText);

            if (data) {
                const csvWriter = createCsvWriter({
                    path: 'japanese.csv',
                    header: [
                        { id: 'japanese', title: 'Japanese' },
                        { id: 'pronunciation', title: 'Pronunciation' },
                        { id: 'meaning', title: 'Meaning' }
                    ],
                    append: true
                });

                csvWriter.writeRecords([data])
                    .then(() => console.log('Data appended to CSV file successfully'))
                    .catch(error => console.error('Error appending data to CSV file:', error));
            }
        });

        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

exec();