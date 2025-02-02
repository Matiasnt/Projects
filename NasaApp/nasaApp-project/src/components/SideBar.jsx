export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>The elder scrolls IV</h2>
        <div>
          <p>Description</p>
          <p>Release Date</p>
        </div>
        <button>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
