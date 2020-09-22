import React from 'react'
import "./../sass/about-me.scss";

const AboutMe = () => {
  return (

    <section className="about-me">
      <div className="container">
        <header><p className="p--h1 p--uppercase"><span className="span--green span--h1">O</span> mnie</p></header>
        <div className="articles">
          <article>
            <p><span className="span--green">N</span>azywam się Marcin Parda i aspiruję na stanowisko Front-end Developera. Aktualnie jestem na 3 roku kierunku Informatyka na Uniwersytecie Warmińsko Mazurskim w Olsztynie. W trakcie studiowania wykonywałem projekty zespołowe przy użyciu GITa. Chętnie zgłaszałem się na miejsce lidera zespołu, jeśli była taka potrzeba.</p>
            <p><span className="span--green">W</span> swoich projektach staram się używać poprawnego i semantycznego kodu HMTL i metedologii BEM. Korzystam z preprocesora SCSS. Swobodnie posługuję się JavaScriptem.</p>
          </article>
          <article>
            <p><span className="span--green">A</span>ktualnie programuję w React i chciałbym dalej pracować w tej technologii. W tym frameworku tworzę aplikację, przy pomocy CRA, która będzie zawierać autoryzację i własne API (nie jestem autorem API). Potrafię programować obiektowo. Znam i staram się używać zasad SOLID i DRY. Do projektowania stron używam zazwyczaj aplikację Figma. </p>
            <p><span className="span--green">S</span>wobodnie posługuję się językiem angielskim. (poziom B2 - C1). W wolnym czasie zajmuję się hobbystycznie tworzeniem gier, grą na ukulele i tworzeniem grafik w technice pixel art.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;