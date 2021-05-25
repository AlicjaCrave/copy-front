import React from 'react';
import Image from 'react-bootstrap/Image';

// == Import
import './pageArchivesUser.scss';

// == Composant
const Archives = ({ archive }) => {
  const dateStart = archive.date_start;
  const dateFinish = archive.date_finish;

  const convertedDateStart = new Date(dateStart);
  const localDateStart = convertedDateStart.toLocaleString('fr-FR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  const convertedDateFinish = new Date(dateFinish);
  const localDateFinish = convertedDateFinish.toLocaleString('fr-FR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  return (
    <div className="archive-content">
      <Image
        className="icon-resolution"
        width="300"
        src={archive.url_thumbnail}
        rounded
      />
      <div className="infos-resolution">
        <span className="infos-resolution-title">{archive.post_title}</span>
        <span className="infos-resolution-date">Démarrée le {localDateStart}</span>
        <span className="infos-resolution-date">Terminée le {localDateFinish}</span>
      </div>
    </div>
  );
};
// == Export
export default Archives;
