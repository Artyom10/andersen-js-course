export class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const result = await fetch(this.albumsUrl).then((response) => response.json());
    return result;
  }
}

const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
musician.getAlbums().then((albums) => console.log(albums));
