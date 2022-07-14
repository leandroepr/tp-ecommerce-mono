export default function Placeholder ({width, height, text}) {
  return(
    <a><img src={`https://via.placeholder.com/${width}x${height}?text=${text}+${width}x${height}`}/></a>
  )
}