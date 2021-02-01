/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import { useRouter } from 'next/router';
import React from 'react';
import Widget from '../Widget';
import BackLinkArrow from '../BackLinkArrow';
import db from '../../../db.json';

export default function ResultWidget({ results }) {
  const router = useRouter();
  const playerName = router.query.name;

  const numberOfCorrectAnswers = results.filter((x) => x).length;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        Inicio
      </Widget.Header>

      <Widget.Content>
        <h3>{`Parabéns ${playerName}, você finalizou o quiz "${db.title}"`}</h3>
        <p>{`No total, você acertou ${numberOfCorrectAnswers} perguntas`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {`# ${index + 1} -- `}
              {`${result ? 'Acertou :)' : 'Errou :('}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
