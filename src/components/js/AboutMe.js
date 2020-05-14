import React from 'react'
import "./../sass/about-me.scss";

const AboutMe = () => {
    return (

        <section className="about-me">
            <div className="container">
                <header><p className="p--h1 p--uppercase"><span className="span--green span--h1">O</span> mnie</p></header>
                <article className="column1">
                    <p><span className="span--green">N</span>azywam się Marcin Parda i aspiruję na stanowisko Front-end Developerem. Aktualnie jestem na 3 roku kierunku Informatyka na Uniwersytecie Warmińsko Mazurskim w Olsztynie. W trakcie studiowania wykonywałem projekty zespołowe przy użyciu GITa. Chętnie zgłaszałem się na miejsce lidera zespołu, jeśli była taka potrzeba.</p>
                    <p><span className="span--green">W</span> swoich projektach staram się używać poprawnego i semantycznego kodu HMTL i metedologii BEM. Korzystam  preprocesora SCSS. Swobodnie posługuję się JavaScript'em.</p>
                </article>
                <article className="column2">
                    <p><span className="span--green">A</span>ktualnie programuję w React i chciałbym pracować dalej w tej technologii. W tym frameworku tworzę teraz aplikację, przy pomocy CRA, która będzie zawiera autoryzację i własne API (nie jestem autorem API). Potrafię programować obiektowo. Znam i staram się używać zasad SOLID i DRY. Do projektowania stron używam zazwyczaj aplikację Figma. </p>
                    <p><span className="span--green">S</span>wobodnie posługuję się językiem angielskim. (poziom B2 - C1). W wolnym czasie zajmuję się hobbystycznie tworzeniem gier, grą na ukulele i tworzenie grafik w technice pixel art.</p>
                </article>
            </div>
        </section>
    )
}

export default AboutMe;