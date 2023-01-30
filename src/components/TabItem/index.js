import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateActiveTab} = props
  const {tabId, displayText} = tabDetails

  const tabClass = isActive ? 'tab-button active' : 'tab-button'
  const onClickTab = () => updateActiveTab(tabId)

  return (
    <li className="tab-item">
      <button className={tabClass} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
