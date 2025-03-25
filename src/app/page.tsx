import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sova - Furniture",
  description: "This sova will inovating your home",
}

export default function Home() {
  return (
    <main>
      <article>

        <section>
          <aside className="left">
            <h2 className="titleSection">Sova</h2>
            <p className="descSection">Explore our wide selection of stylish and comfortable sofas, designed to elevate your living space. From classic to contemporary styles, find the perfect centerpiece for your home and create a haven of relaxation and style.</p>
          </aside>

          <aside className="right">
            <Image width={350} height={100} src="/products/sofa1.png" alt="Sofa 1" />
          </aside>
        </section>

        <section className="productSection" id="product">

          <aside className="right">
            <h2 className="titleSection">Our Products</h2>
            <p className="descSection">We take pride in our products, ensuring they are crafted with the highest quality and designed to exceed your expectations.</p>
            <button className="cta-btn">More Products</button>
          </aside>

          <aside className="left">
            <div className="product-wrap">
              <img src="products/sofa1.png" alt="Sofa Image" />
              <h4>$199.9</h4>
            </div>
            <div className="product-wrap">
              <img src="products/sofa2.png" alt="Sofa Image" />
              <h4>$259.9</h4>
            </div>
          </aside>

        </section>

        <section className="contactSection" id="contact">

          <aside className="left">
            <h2 className="titleSection">Contact Us</h2>
            <p className="descSection">Contact us today, and we’ll ensure your order is promptly delivered right to your address!</p>
          </aside>

          <aside className="right">
            <div className="link-wrap">
              <a href="mailto:sova@furniture.com" target="_blank"><i className="fa fa-envelope"></i> sova@furniture.com</a>
              <a href="tel:+0812345678" target="_blank"><i className="fa fa-phone"></i> +62 812 3453 678</a>
            </div>
          </aside>

        </section>

      </article>
    </main>
  );
}
