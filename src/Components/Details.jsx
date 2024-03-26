function Details() {
  return (
    <section>
      <h2>Our bestselling chairs</h2>
      <div className="grid-3-cols">
        <figure className="chair">
          <img src="chair-1.jpg" alt="Chair" />
          <div className="chair-box">
            <h3>The Laid Back</h3>
            <ul className="chair-details">
              <li>
                {/* <!-- Span is a generic INLINE text element, it doesn't have any meaning. It's like a div element, but inline --> */}
                <span>Leisure and relaxing</span>
              </li>
              <li>
                <span>Comfortable for 4h</span>
              </li>
              <li>
                <span>Vegan leather</span>
              </li>
              <li>
                <span>Weighs 16 kg</span>
              </li>
            </ul>
            <div className="chair-price">
              <strong>250€</strong>
              <a href="#" className="btn btn--small">
                Add to cart
              </a>
            </div>
          </div>
        </figure>

        <figure className="chair">
          <img src="chair-2.jpg" alt="Chair" />
          <div className="chair-box">
            <h3>The Worker Bee</h3>
            <ul className="chair-details">
              <li>
                <span>Work</span>
              </li>
              <li>
                <span>Comfortable for 8h</span>
              </li>
              <li>
                <span>Vegan leather</span>
              </li>
              <li>
                <span>Weighs 22 kg</span>
              </li>
            </ul>
            <div className="chair-price">
              <strong>525€</strong>
              <a href="#" className="btn btn--small">
                Add to cart
              </a>
            </div>
          </div>
        </figure>

        <figure className="chair">
          <img src="chair-3.jpg" alt="Chair" />
          <div className="chair-box">
            <h3>The Chair 4/2</h3>
            <ul className="chair-details">
              <li>
                <span>Leisure and relaxing</span>
              </li>
              <li>
                <span>Comfortable all day!</span>
              </li>
              <li>
                <span>Organic cotton</span>
              </li>
              <li>
                <span>Weighs 80 kg</span>
              </li>
            </ul>
            <div className="chair-price">
              <strong>1450€</strong>
              <a href="#" className="btn btn--small">
                Add to cart
              </a>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Details;
