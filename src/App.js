import React from 'react';
const express = require('express');
const app = express();


class ImageUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null
    };
  }

  handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    this.setState({
      selectedImage: selectedFile
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer l'image vers le serveur ou effectuer d'autres actions
    const express = require('express');
const app = express();

app.use(express.json());

app.post('/set-docker-variable', (req, res) => {
  const { variableValue } = req.body;

  // Set the value as an environment variable
  process.env.DOCKER_VARIABLE = variableValue;

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

    const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
    console.log('Image téléchargée:', this.state.selectedImage);

  }

  render() {
    const { selectedImage } = this.state;

    return (
      <div>
        <h1>Uploader une image</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="file" accept="image/*" onChange={this.handleImageChange} />
          <button type="submit" disabled={!selectedImage}>Télécharger</button>
        </form>
        {selectedImage && (
          <div>
            <h2>Aperçu de l'image</h2>
            <img src={URL.createObjectURL(selectedImage)} alt="Aperçu" />
          </div>
        )}
      </div>
    );
  }
}

export default ImageUploader;