import logo from './logo.svg';
import {useState} from "react"
import './App.css';

function App() {
  let defaultLang = "cn"
  if(!!window.navigator.language && window.navigator.language.indexOf("en") !== -1) {
      defaultLang = "en"
  }
  const [lang, setLang] = useState(window.localStorage.lang || defaultLang)
  return (
    <div className="App">
      <header className="Header">
        <div className={"LogoContainer"}>
          <img src={logo} className="Logo" alt="logo"/>
        </div>
        <div className={"LangContainer"}>
          <div>
            <div onClick={() => {
              window.localStorage.lang = "en"
              setLang("en")
            }}>ENGLISH
            </div>
            <div onClick={() => {
              window.localStorage.lang = "cn"
              setLang("cn")
            }}>中文
            </div>
          </div>
        </div>
        <div className={"BotLine"}/>
      </header>
      <div className={"Content"}>
        {lang !== "en" && <div>
          <h1>媒体艺术21 <br/>2000年以来全球媒体艺术实践与反思，及其教学探索</h1>
          <h2>使命宣言</h2>
          <p>媒体艺术是全球当代艺术实践中不可或缺的组成部分。媒体艺术以媒介的过去、现在和未来诠释世界之当下。伴随着媒体艺术实践及其在国际艺术展览中占比的日益增长，对其展开批评与学术反思，并将这一实践领域纳入到艺术教育的需求也在不断增加。对于艺术家，学者，策展人和学生而言，获得原始资料以及进行批判性反思，对于研究和发展对当代艺术产生了显著影响，启发并促使其建构的媒体艺术这一领域至关重要。
            “媒体艺术21——21世纪的媒体艺术”旨在通过以全球视野对2000年以来的媒体艺术进行概述来满足这一需求。</p>
          <p>自千禧年以及互联网2.0的兴起以来，数字内容生产与传播的便捷对于学术探讨、在线出版、数据库以及区域性的研究等助益非浅。目前，有必要建
            立一个多元且共享的平台，以便创建和产出超越自发于地缘板块的批判性对话。此一出版及线上展览项目在“和基金会”的支持下，将以中英双语的方
            式呈现，旨在覆盖全球范围内更广泛的观众群。该项目还希望在其他志同道合的机构资助者的支持下，实现一个⻄班牙文版本。</p>
          <p>受2004年和2005年出版的“媒体艺术网络”(Media Art Net)网站的启发(该网站由鲁道夫·弗里林[ Rudolf Frieling ]和迪特·丹尼尔斯[ Dieter Daniels
            ]代表卡尔斯鲁厄的媒体艺术中心[ ZKM Center for Art and Media Karlsruhe ]共同主持)，中央美术学院科技艺术研究院由此启动为期三
            年的全球媒体艺术研究和在线展览系列项目。由中央美术学院主办，张尕(中央美术学院教授、科技艺术研究院副主任)与鲁道夫·弗里林(旧金山
            当代艺术博物馆媒体艺术策展人)共同指导，项目旨在再次收集信息，数据，事实和语境，并将对媒体艺术实践中最为关键且紧迫的脉络与趋势进行
            更清晰的全球性反思。作为一个数据库驱动的线上平台，项目还将力图采用新颖的界面设计和创意技术，用以满足时基媒体艺术作品在其展示方面的
            特殊要求，以及不断发展的电子学习诉求，其中包括如直播讲座、在线访谈和座谈会等流媒体教学模式。为了与全球各地的伙伴促成富有成效的对
            话，项目产出的第一年将制定明确的内容，联合艺术指导现已确定了三个主题领域作为初始优先项。</p>
          <h2>三个主题领域</h2>
          <p>我们将制定三个主题领域，并考虑到三者间时常相互依存、作用与重叠的情况，提供一套交叉引述的工具，用以强调诸主题的连接性与相互性，同时展望对于每个实践和思考领域的深入探索。后人类（Posthuman）、生态（Ecologies）、共同体（The
            Commons）的三个暂定主题名反映了近期艺术实践和理论话语范式的转变，特别是媒体艺术对此的回应。此框架将通过与全球各地合作机构与个人的密切对话来进一步发展，以期实现包容性与协作性，并将瞩目被边缘化以及尚未得到充分代表的媒体艺术理念与实践。本项目将致力于对定义了过去20年的艺术、技术和当代话语的主题展开详尽考察。“媒体艺术21”
            将参考已建立的媒体艺术形式，并在需要时扩展其领域。为此，该项目将考虑一种基于主题的研究和出版方式，同时提供一个与理解21世纪媒体艺术领域相关的广泛材料基础。</p>
          <p>我们的使命宣言旨在吸引潜在合作伙伴（艺术家、学者、批评家和策展人）的兴趣，以参与并为此项目作出贡献。我们正计划在2021年至2024年的三年内，借由出版模块和数据库制定一系列模块化主题线索，用以促进交叉链接、对话反馈以及一系列线上展览。
          </p>
          <p>中央美术学院（北京） 主办，和基金会资助，张尕、鲁道夫·弗里林联合艺术指导。</p>
        </div>}
        {lang === "en" && <div>
          <h1>Media Art 21<br/> Practices, Reflections, and Pedagogies of Global Media Art Since 2000</h1>
          <h2>Mission Statement </h2>
          <p>
            Media art is an essential part of global contemporary art practice. It addresses the world of the present
            through the media of the past, present, and future. With the increasing artistic production of media art and
            its growing presence in international art exhibitions comes a growing need for critical and scholarly
            reflection, as well as for the inclusion of this field of practice in art education. Access for artists,
            scholars, curators, and students to original materials in conjunction with critical reflection is of prime
            importance for the study and development of an artistic field that has remarkably influenced, shaped, and
            stimulated contemporary art. MA21 – Media Art in the 21st century – seeks to address this need through an
            overview of media art since 2000 from a global perspective.

          </p>
          <p>

            Since the millennium and the rise of Internet 2.0 the ease of production and dissemination of digital
            content has proven indispensable and beneficial to distinct fields of scholarship, online publications and
            databases, as well as to regional voices of discourse. Yet the need for establishing both a diverse but also
            shared platform in order to create and produce a critical dialogue beyond those originated in various
            localities appears to be pressing. This publication and online exhibition project will be bilingual in
            Chinese and English and aims at reaching a worldwide audience with funding currently provided by the He
            Foundation. We also wish to implement a Spanish language version through the support of other like-minded
            institutional funders.

          </p>
          <p>


            Inspired by the sustained success and educational relevance of the website Media Art Net, published in 2004
            and 2005 and co-edited by Rudolf Frieling and Dieter Daniels on behalf of ZKM Center for Art and Media
            Karlsruhe, the Institute of Sci-Tech Arts of the Central Academy of Fine Arts (CAFA) has thus initiated
            Global Media Art Research and Online Exhibition Series as a three-year research and exhibition project.
            Organized by CAFA and co-directed by ZHANG Ga, Professor and Vice Dean of the Institute of Sci-Tech Arts,
            CAFA; Rudolf Frieling, Curator of Media Arts, San Francisco Museum of Modern Art; and Margit Rosen, Head of
            Collections, Archives and Research, ZKM | Center for Art and Media Karlsruhe, the project aims once again to
            gather information, data, facts and contexts but with a much more pronounced global reflection on the most
            crucial and urgent strands of media art practices. Conceived as a database-driven online platform, the
            project also seeks to employ an innovative design scheme and robust technologies to address the special
            requirements of time-based media artworks with regard to their presentation as well as the evolving needs
            for e-learning, including pedagogical formats such as streaming lectures, interviews and panels. While the
            specifics of the content will be developed in the first year of production with the desire to foster a
            constructive dialogue with partners across the globe, the artistic co-directors have identified three
            thematic areas as initial priorities.

          </p>
          <p>


            Three Thematic Areas
            We will develop three thematic areas while being conscious of the fact that they frequently co-exist,
            interact, and overlap with each other. We will provide a set of tools for cross-referencing to emphasize
            this thematic connectivity and reciprocity while foregrounding a deeper exploration of each field of action
            and thought. Thematically, the working titles of Posthuman, Ecologies and The Commons reflect the shifting
            paradigm in recent artistic and theoretical discourses and its resonances in media art in particular. This
            framework will be further developed in close dialogue with partners across the globe with the goal to be
            inclusive and collaborative as well as to bring to the fore underrepresented visions and practices. Allowing
            for references to established forms of media art and expanding the fields when needed, we are committed to a
            thorough investigation of themes in art and technology and contemporary discourses that have defined the
            last two decades. To that end, we are considering a theme-based approach in terms of research and
            publication while also providing a broad base of materials relevant to an understanding of the field of
            media art in the 21st century.

          </p>
          <p>


            Our mission statement seeks to solicit interest by potential partners (artists, scholars, critics and
            curators) to participate and contribute to the project. We are planning a series of modular thematic strands
            developed with a publishing module and database that will facilitate cross-linking, dialogical feedback, and
            a series of exhibitions over the course of three years from 2021 to 2024.

          </p>
          <p>


            Produced by Central Academy of Fine Arts, Beijing, in collaboration with ZKM | Center for Art and Media
            Karlsruhe, with support by He Foundation, and the artistic co-direction by ZHANG Ga, Rudolf Frieling, and
            Margit Rosen

          </p>

        </div>}
      </div>
    </div>
  );
}

export default App;
