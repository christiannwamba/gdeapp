import Vue from 'vue';
export const composeBackgroundStyle = (url, opacity = 0.7) => {
    return {
      width: '100%',
      borderRadius: '5px',
      height: '300px',
      justifyContent: 'center',
      backgroundSize:'cover',
      backgroundImage: `linear-gradient(
    rgba(0, 0, 0, ${opacity}),
    rgba(0, 0, 0, ${opacity})
  ),   url(${url || 'http://res.cloudinary.com/christekh/image/upload/v1499087288/1.jpg_au3yo2.jpg'})`
    }
}

export const bus = new Vue()