const HoverCard = ( props ) => (
  <div className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4">
    <a className="sngl-activity-similar-item" href={ props.permalink }>
      { props.guides_choice && 
      <div className="sngl-activity-badges">
        <img width="250" height="250" loading="lazy" className="badge img-responsive lazyload" data-public-id="background-images/guides-choice" data-lazyload="true" data-responsive="false" data-placeholder="false" alt="Guides\' Choice"></img>
      </div> }
      <div className="sngl-activity-similar-item-img">
      <img width="546" height="302" loading="lazy" className="objectfit img-responsive lazyload" data-public-id={ `activities-thumb/${ props.thumbnail }` } data-lazyload="true" data-responsive="true" data-placeholder="false" alt=""></img>
    </div>
    <div className="sngl-activity-similar-item-cont">
      <div className="sngl-activity-duration">{ props.duration }</div>
      <div className="sngl-activity-cost">from ${ props.cost }</div>
      <h5 className="flush">{ props.title }</h5>
      <div><strong>Location:</strong> { props.location }</div>
      <div><strong>Area:</strong> { props.area }</div>
      <div><strong>Activity Type:</strong> { props.activity_type }</div>
      <div className="sngl-activity-similar-difficulty">
        <strong>Difficulty:</strong>
        <img width="75" height="20" loading="lazy" className="sngl-activity-similar-difficulty__img lazyload" data-public-id={ `icons/${ props.difficulty }.png` } data-lazyload="true" data-responsive="false" data-placeholder="false" alt=""></img>
      </div>
      { props.solitude &&
      <div className="sngl-activity-similar-difficulty">
        <strong>Solitude:</strong>
        <img width="75" height="20" loading="lazy" className="sngl-activity-similar-difficulty__img lazyload" data-public-id={ `icons/${ props.solitude }.png` } data-lazyload="true" data-responsive="false" data-placeholder="false" alt=""></img>
      </div>
      }
      <div>
        <strong>Highlights:</strong> { props.excerpt }
      </div>
    </div>

    </a>
  </div>
  
)

export default HoverCard