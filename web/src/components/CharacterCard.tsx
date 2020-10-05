import React, { useState, useEffect } from 'react';
import api from '../services/api';

import '../routes/Dashboard/styles.css';

interface Character {
  name: string;
  status: string;
  gender: string;
  image: string;
  episodes: string[];
}

export default function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    api.get('').then(res => {
      setCharacters(
        res.data.map(character => ({
          id: character.id,
          name: character.name,
          status: character.status,
          gender: character.gender,
          image: character.image,
          episodes: character.episodes,
        })),
      );
    });
  }, []);

  return (
    <>
      {characters.map((character, index) => (
        <div className="layout">
          <div className="showcaseWapper">
            <div className="showcase">
              <article className="characterCard" key={index}>
                <div className="imgWrapper">
                  <img src={character.image} alt="Imagem do Personagem" />
                </div>
                <div className="contentWrapper">
                  <div className="sessionContent">
                    <h4>{character.name}</h4>
                    <span>
                      {character.status} - {character.gender}
                    </span>
                  </div>
                  <div className="contentEps">
                    <span>Episodes:</span>
                    {character.episodes.map(episode => (
                      <a href={episode}>{episode.replace(/\D/g, ' ')}</a>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
