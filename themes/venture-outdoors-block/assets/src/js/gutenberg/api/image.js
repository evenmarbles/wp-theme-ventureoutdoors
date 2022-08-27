class Cloudinary {
  _ml = null

  constructor( cloud_name, api_key, username ) {
    if ( !Cloudinary.instance ) {
      this.data = {}
      var mloptions = {
        cloud_name: 'ventureoutdoors',
        api_key: '118896131689196',
        username: 'astrid@ventureoutdoorsllc.com',
        button_class: 'myBtn',
        button_caption: 'Insert Images',
        default_transformations: [
          [{quality: "auto"},{fetch_format: "auto"}],
        ],  
      }
      window.ml = cloudinary.createMediaLibrary( mloptions, { 
        insertHandler: function (data) {
          window.dispatchEvent( new CustomEvent('MediaSelected', { detail: { id: instance.data['uniqueId'], assets: data.assets } } ) )
        } 
      } )

      Cloudinary.instance = this
    }

    return Cloudinary.instance
  }

  openMediaLibrary( id, options=null ) {
    this.data['uniqueId'] = id
    window.ml.show( options )
  }

  closeMediaLibrary() {
    window.ml.hide()
  }
}

const instance = new Cloudinary()
Object.freeze(instance)

export default instance