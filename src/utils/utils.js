let API_URL = process.env.REACT_APP_BASE_URL;

const getHash = (ts, privateKey, publicKey) => {
  return "537c2064669d48bf12807cc16f272b3b";
};

// let ts = Date.now().toString();
let ts = 1;
let apiKey = process.env.REACT_APP_API_KEY;
//let privateKey = process.env.REACT_APP_PRIVATE_KEY;
let hash = getHash();

const fetchHeroes = async (value) => {
  let heroUrl = `${API_URL}/v1/public/characters`;
  console.log(`value: ${value}`);

  //let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;
  console.log(`fetchHeroes: ${url}`);
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(`data:`);
    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

const fetchHero = async (id) => {
  let heroUrl = `${API_URL}/v1/public/characters/${id}`;
  let url = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`;
  console.log(`fetchHero: ${url}`);
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(`data.data.results:`);
    console.log(data.data.results);
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

//export default fetchHeroes;
export { fetchHeroes, fetchHero };
