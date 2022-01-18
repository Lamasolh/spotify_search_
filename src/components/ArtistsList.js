import React from 'react';
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import ReactStars from 'react-rating-stars-component'
import {Link} from 'react-router-dom';

const ArtistsList = ({ artists }) => {
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                { artist.name!=="Nawal Al Zoghbi" &&
                <Card style={{ width: '18rem' }}>
                <a
                    target="_blank"
                    href={artist.external_urls.spotify}
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                    {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                    </a>
                  <Card.Body>
                    <Card.Title>{ artist.name!=="Nawal Al Zoghbi" && <h5> {artist.name}</h5> }</Card.Title>
                    <Link to={"albums/"+artist.id}>  { artist.name!=="Nawal Al Zoghbi" && <h5>{artist.followers.total.toLocaleString('en')} followers</h5>}</Link>
                    <ReactStars value={artist.popularity/20} readonly/>
                  </Card.Body>
                </Card>}
              </React.Fragment>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

/* <Switch>
  <Route path="/component/AlbumsList"></Route>
</Switch> */
export default ArtistsList;
