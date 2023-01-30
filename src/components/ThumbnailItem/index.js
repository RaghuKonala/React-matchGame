import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, checkImages} = props
  const {id, thumbnailUrl} = thumbnailDetails

  const onClickThumbnail = () => checkImages(id)

  return (
    <li className="thumbnail-item">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img className="thumbnail-image" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
