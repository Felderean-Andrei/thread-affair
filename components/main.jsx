import ProductTile from './catalog/product-tile';
import HomeNewsletter from './homepage/home-newsletter';

export default function Main() {
  return (
    <main className="content">
      <header className="content-header">
        <div className="banner-main">
          <div className="banner-main-inner container">
            <div className="banner-info">
              <h1>Custom Suits</h1>
              <h2>Get back to work in style</h2>

              <a
                href=""
                title="Create your suit"
                className="button button-large"
              >
                Create your suit
              </a>
            </div>

            <div className="banner-copy">
              <p>
                <span>A tailored suit</span>
                that will fit you perfectly is a dream for everybody.
              </p>

              <p className="d-none d-lg-block">
                We provide you with the design and you choose if you like it or
                if you want to change the details with our online configurator.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="content-main">
        <section className="home-catalog-preview container">
          <header>
            <h1 className="section-title">
              <span>Glamour</span> Suits
            </h1>
            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>
          <section className="product-tiles demo row">
            <div className="col-12 col-lg-3">
              <ProductTile></ProductTile>
            </div>
            <div className="col-12 col-lg-3 offset-lg-1 mt-4 mt-lg-0">
              <ProductTile></ProductTile>
            </div>
            <div className="col-12 col-lg-3 offset-lg-1 mt-4 mt-lg-0">
              <ProductTile></ProductTile>
            </div>
          </section>
          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>
        <section className="home-catalog-preview container demo-flex">
          <header>
            <h1 className="section-title">
              <span>Wedding</span> Suits
            </h1>
            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>
          <section className="product-tiles">
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
            <ProductTile></ProductTile>
          </section>
          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview container">
          <header>
            <h1 className="section-title">
              <span>Office</span> Suits
            </h1>

            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles d-flex flex-column flex-lg-row justify-content-between">
            <div className="mb-5 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div className="mb-5 mb-lg-0">
              <ProductTile></ProductTile>
            </div>

            <div>
              <ProductTile></ProductTile>
            </div>
          </section>

          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview container demo-grid">
          <header>
            <h1 className="section-title">
              <span>Wedding</span> Suits
            </h1>

            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
          </section>

          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

        <HomeNewsletter></HomeNewsletter>

        <section className="home-payment container">
          <header>
            <h1 className="section-title">
              How to <span>Pay</span>
            </h1>
          </header>

          <ul>
            <li>
              <a href="">
                <img src="/images/payment/visa.jpg" alt=""></img>
              </a>
            </li>

            <li>
              <a href="">
                <img src="/images/payment/mastercard.jpg" alt=""></img>
              </a>
            </li>

            <li>
              <a href="">
                <img src="/images/payment/maestro.jpg" alt=""></img>
              </a>
            </li>

            <li>
              <a href="">
                <img src="/images/payment/cirrus.jpg" alt=""></img>
              </a>
            </li>

            <li>
              <a href="">
                <img src="/images/payment/paypal.jpg" alt=""></img>
              </a>
            </li>

            <li>
              <a href="">
                <img src="/images/payment/visa_electron.jpg" alt=""></img>
              </a>
            </li>

            <li>
              <a href="">
                <img src="/images/payment/amazon.jpg" alt=""></img>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
