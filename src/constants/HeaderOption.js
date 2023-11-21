export const lookOption = {
  method: 'POST',
  url: 'https://microsoft-translator-text.p.rapidapi.com/Dictionary/Lookup',
  params: { to: 'en', 'api-version': '3.0', from: 'fr' },
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '037bbf60c4mshf746b6dbd12dce6p1f0b1ejsn292aa5f20abf',
    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
  },
  data: '[{"Text":""}]',
};

export const dicExOption = {
  method: 'POST',
  url: 'https://microsoft-translator-text.p.rapidapi.com/Dictionary/Examples',
  params: { to: 'en', from: 'fr', 'api-version': '3.0' },
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '037bbf60c4mshf746b6dbd12dce6p1f0b1ejsn292aa5f20abf',
    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
  },
  data: '[{"Text":"bonjour","Translation":"hello"}]',
};
