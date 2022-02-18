import './styles.css'

export function Button({ children, size, px, py, outline }) {

  function sizeButton(size, px, py) {
    if (size === 'lg') {
      return {
        py: '1.5rem',
        px: '2rem'
      }
    } else if (size === 'md') {
      return {
        py: '0.5rem',
        px: '1rem'
      }
    }
    return {
      px: `${px}rem`,
      py: `${py}rem`
    }
  }

  const setSize = sizeButton(size, px, py);

  return (
    <button className={`button ${outline && 'outline'}`} style={{
      padding: `${setSize.py} ${setSize.px}` 
    }}>{children}</button>
  )
}




// return (
//     <button class="button" style={{
//       height: `${height}px`,
//       width: `${width}px`
//     }}>{title}</button>
//   )


// function sizeButton(size) {
//     if (size === 'lg') {
//       return {
//         h: '60px',
//         w: '300px'
//       }
//     } else if (size === 'md') {
//       return {
//         h: '40px',
//         w: '200px'
//       }
//     } 
//     return {
//       h: '20px',
//       w: '100px'
//     }
//   }
// return (
//     <button class="button" style={{
//       height: buttonStyleSize.h,
//       width: buttonStyleSize.w
//     }}>{title}</button>
//   )