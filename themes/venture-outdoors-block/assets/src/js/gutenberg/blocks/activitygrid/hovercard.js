const HoverCard = ( props ) => (
  <div className="col-xxs-12 col-xs-6 col-sm-6 col-lg-4">
    <a className="sngl-activity-similar-item" href={ props.permalink }>
      { props.guides_choice && 
      <div className="sngl-activity-badges">
        <img width="300" height="300" className="badge img-responsive lazyload"
          sizes="(max-width: 300px) 100vw, 300px"
          data-src="https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon.png"
          data-srcset="https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon.png 300w, 
            https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon-150x150.png 150w, 
            https://wildlandtrekking.com/content/uploads/2020/03/guideschoice-icon-37x37.png 37w"
          alt="" loading="lazy" />
      </div> }
      <div className="sngl-activity-similar-item-img">
      <img width="890" height="500" className="objectfit img-responsive lazyload" 
        sizes="(max-width: 890px) 100vw, 890px"
        data-src={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/activities-thumb/${ props.thumbnail }` }
        data-srcset={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_890/activities-thumb/${ props.thumbnail } 890w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_300/activities-thumb/${ props.thumbnail } 300w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_853/activities-thumb/${ props.thumbnail } 853w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_768/activities-thumb/${ props.thumbnail } 768w, 
          https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/activities-thumb/${ props.thumbnail } 49w` }
        alt="" loading="lazy" />
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
        <img width="75" height="20" className="sngl-activity-similar-difficulty__img lazyload" 
          sizes="(max-width: 75px) 100vw, 75px"
          data-src={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/${ props.difficulty }.png` } 
          data-srcset={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_75/icons/${ props.difficulty } 75w, 
            https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/icons/${ props.difficulty } 49w` }
          alt="" loading="lazy" />
      </div>
      { props.solitude &&
      <div className="sngl-activity-similar-difficulty">
        <strong>Solitude:</strong>
        <img width="75" height="20" className="sngl-activity-similar-difficulty__img lazyload" 
          sizes="(max-width: 75px) 100vw, 75px"
          data-src={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto/icons/${ props.solitude }.png` } 
          data-srcset={ `https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_75/icons/${ props.solitude} 75w, 
            https://res.cloudinary.com/ventureoutdoors/image/upload/q_auto,f_auto,c_scale,w_49/icons/${ props.solitude} 49w` }
          alt="" loading="lazy" />
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