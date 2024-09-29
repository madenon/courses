import React, { useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show41, setShow41] = useState(false);
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"A props de"} text2={"Nous"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col shadow-sm justify-center gap-6 md:w-2/4 text-gray-600">
          <div className="flex justify-between items-center text-center gap-5">
            <p>Tout savoir sur notre mission</p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow(!show)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show ? (
              <span>
                contenu 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Esse, asperiores? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ad eligendi, cumque facere voluptate, magnam
                perferendis praesentium tempore sunt optio dolor nam culpa
                minima alias illo? Similique exercitationem ex animi. Vero sint
                omnis inventore ex adipisci eaque dicta illo eius veritatis
                doloribus dolores, quis mollitia dignissimos. Dolore libero
                omnis tempore in qui? Voluptate maiores velit labore illum
                voluptates tenetur amet doloremque repellendus, dolorum
                doloribus dolore corporis natus voluptas praesentium sit ipsum.
                Aspernatur obcaecati sequi assumenda autem, illo odit dolorum
                aliquam? In tempore reprehenderit voluptas? Natus odio dolorem
                perspiciatis voluptates labore commodi, suscipit sed laboriosam
                laudantium voluptatum dolore in eum alias debitis aperiam nemo
                dignissimos, totam pariatur tempore mollitia laborum?
                Consectetur, dignissimos doloribus sint quasi deleniti illo enim
                recusandae in tenetur, voluptatibus iste veniam! Perspiciatis
                dolore deserunt quo aliquam quam, id eum veniam distinctio
                vitae. Sint, unde esse, ducimus deserunt saepe laudantium, error
                doloremque quae ratione veritatis aliquid dolorum voluptatum
                cupiditate exercitationem eius consequatur fugit officia eveniet
                eaque assumenda minima distinctio quaerat voluptatem nobis! Quia
                dolorum beatae alias. Necessitatibus pariatur sapiente quia
                molestias culpa quo eligendi impedit laborum? Iste, corporis et.
                Magnam consectetur ipsa quasi atque ratione in eligendi, ipsum
                non nobis doloribus enim porro eos saepe praesentium sed
                explicabo, consequuntur officia? Aperiam fugiat expedita, a
                atque, dicta numquam, et omnis fuga corporis delectus autem quam
                excepturi enim. Autem cumque fugit illo omnis architecto. Quas
                itaque minus ratione vitae corporis ad necessitatibus deleniti
                eius beatae esse modi deserunt sequi perferendis, quo odio,
                totam voluptatem dolore laborum quia inventore. Quidem minima
                quibusdam id esse hic officia, optio nisi sint sed tempora!
                Facere placeat, sequi voluptas accusamus quas quidem similique,
                qui molestiae nam id, dolorem dolores. Molestias aspernatur,
                deleniti tempore, sapiente autem dicta illo repudiandae quasi
                atque amet nisi quam et similique nesciunt ab facere ullam, quas
                eveniet nam iure at quaerat mollitia porro.
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between items-center text-center gap-5">
            <p>Tout savoir sur les conditions de retour de commande </p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow1(!show1)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show1 ? (
              <span>
                contenu 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Esse, asperiores? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ad eligendi, cumque facere voluptate, magnam
                perferendis praesentium tempore sunt optio dolor nam culpa
                minima alias illo? Similique exercitationem ex animi. Vero sint
                omnis inventore ex adipisci eaque dicta illo eius veritatis
                doloribus dolores, quis mollitia dignissimos. Dolore libero
                omnis tempore in qui? Voluptate maiores velit labore illum
                voluptates tenetur amet doloremque repellendus, dolorum
                doloribus dolore corporis natus voluptas praesentium sit ipsum.
                Aspernatur obcaecati sequi assumenda autem, illo odit dolorum
                aliquam? In tempore reprehenderit voluptas? Natus odio dolorem
                perspiciatis voluptates labore commodi, suscipit sed laboriosam
                laudantium voluptatum dolore in eum alias debitis aperiam nemo
                dignissimos, totam pariatur tempore mollitia laborum?
                Consectetur, dignissimos doloribus sint quasi deleniti illo enim
                recusandae in tenetur, voluptatibus iste veniam! Perspiciatis
                dolore deserunt quo aliquam quam, id eum veniam distinctio
                vitae. Sint, unde esse, ducimus deserunt saepe laudantium, error
                doloremque quae ratione veritatis aliquid dolorum voluptatum
                cupiditate exercitationem eius consequatur fugit officia eveniet
                eaque assumenda minima distinctio quaerat voluptatem nobis! Quia
                dolorum beatae alias. Necessitatibus pariatur sapiente quia
                molestias culpa quo eligendi impedit laborum? Iste, corporis et.
                Magnam consectetur ipsa quasi atque ratione in eligendi, ipsum
                non nobis doloribus enim porro eos saepe praesentium sed
                explicabo, consequuntur officia? Aperiam fugiat expedita, a
                atque, dicta numquam, et omnis fuga corporis delectus autem quam
                excepturi enim. Autem cumque fugit illo omnis architecto. Quas
                itaque minus ratione vitae corporis ad necessitatibus deleniti
                eius beatae esse modi deserunt sequi perferendis, quo odio,
                totam voluptatem dolore laborum quia inventore. Quidem minima
                quibusdam id esse hic officia, optio nisi sint sed tempora!
                Facere placeat, sequi voluptas accusamus quas quidem similique,
                qui molestiae nam id, dolorem dolores. Molestias aspernatur,
                deleniti tempore, sapiente autem dicta illo repudiandae quasi
                atque amet nisi quam et similique nesciunt ab facere ullam, quas
                eveniet nam iure at quaerat mollitia porro.
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between items-center text-center gap-5">
            <p>Tout savoir sur l'échange d'un colis après livraison </p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow2(!show2)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show2 ? (
              <span>
                contenu 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Esse, asperiores? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ad eligendi, cumque facere voluptate, magnam
                perferendis praesentium tempore sunt optio dolor nam culpa
                minima alias illo? Similique exercitationem ex animi. Vero sint
                omnis inventore ex adipisci eaque dicta illo eius veritatis
                doloribus dolores, quis mollitia dignissimos. Dolore libero
                omnis tempore in qui? Voluptate maiores velit labore illum
                voluptates tenetur amet doloremque repellendus, dolorum
                doloribus dolore corporis natus voluptas praesentium sit ipsum.
                Aspernatur obcaecati sequi assumenda autem, illo odit dolorum
                aliquam? In tempore reprehenderit voluptas? Natus odio dolorem
                perspiciatis voluptates labore commodi, suscipit sed laboriosam
                laudantium voluptatum dolore in eum alias debitis aperiam nemo
                dignissimos, totam pariatur tempore mollitia laborum?
                Consectetur, dignissimos doloribus sint quasi deleniti illo enim
                recusandae in tenetur, voluptatibus iste veniam! Perspiciatis
                dolore deserunt quo aliquam quam, id eum veniam distinctio
                vitae. Sint, unde esse, ducimus deserunt saepe laudantium, error
                doloremque quae ratione veritatis aliquid dolorum voluptatum
                cupiditate exercitationem eius consequatur fugit officia eveniet
                eaque assumenda minima distinctio quaerat voluptatem nobis! Quia
                dolorum beatae alias. Necessitatibus pariatur sapiente quia
                molestias culpa quo eligendi impedit laborum? Iste, corporis et.
                Magnam consectetur ipsa quasi atque ratione in eligendi, ipsum
                non nobis doloribus enim porro eos saepe praesentium sed
                explicabo, consequuntur officia? Aperiam fugiat expedita, a
                atque, dicta numquam, et omnis fuga corporis delectus autem quam
                excepturi enim. Autem cumque fugit illo omnis architecto. Quas
                itaque minus ratione vitae corporis ad necessitatibus deleniti
                eius beatae esse modi deserunt sequi perferendis, quo odio,
                totam voluptatem dolore laborum quia inventore. Quidem minima
                quibusdam id esse hic officia, optio nisi sint sed tempora!
                Facere placeat, sequi voluptas accusamus quas quidem similique,
                qui molestiae nam id, dolorem dolores. Molestias aspernatur,
                deleniti tempore, sapiente autem dicta illo repudiandae quasi
                atque amet nisi quam et similique nesciunt ab facere ullam, quas
                eveniet nam iure at quaerat mollitia porro.
              </span>
            ) : (
              ""
            )}
          </div>
          {/* gggg */}

          <div className="flex justify-between items-center text-center gap-5">
            <p>Tout savoir sur l'annulation de commande</p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow3(!show3)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show3 ? (
              <span>
                contenu 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Esse, asperiores? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ad eligendi, cumque facere voluptate, magnam
                perferendis praesentium tempore sunt optio dolor nam culpa
                minima alias illo? Similique exercitationem ex animi. Vero sint
                omnis inventore ex adipisci eaque dicta illo eius veritatis
                doloribus dolores, quis mollitia dignissimos. Dolore libero
                omnis tempore in qui? Voluptate maiores velit labore illum
                voluptates tenetur amet doloremque repellendus, dolorum
                doloribus dolore corporis natus voluptas praesentium sit ipsum.
                Aspernatur obcaecati sequi assumenda autem, illo odit dolorum
                aliquam? In tempore reprehenderit voluptas? Natus odio dolorem
                perspiciatis voluptates labore commodi, suscipit sed laboriosam
                laudantium voluptatum dolore in eum alias debitis aperiam nemo
                dignissimos, totam pariatur tempore mollitia laborum?
                Consectetur, dignissimos doloribus sint quasi deleniti illo enim
                recusandae in tenetur, voluptatibus iste veniam! Perspiciatis
                dolore deserunt quo aliquam quam, id eum veniam distinctio
                vitae. Sint, unde esse, ducimus deserunt saepe laudantium, error
                doloremque quae ratione veritatis aliquid dolorum voluptatum
                cupiditate exercitationem eius consequatur fugit officia eveniet
                eaque assumenda minima distinctio quaerat voluptatem nobis! Quia
                dolorum beatae alias. Necessitatibus pariatur sapiente quia
                molestias culpa quo eligendi impedit laborum? Iste, corporis et.
                Magnam consectetur ipsa quasi atque ratione in eligendi, ipsum
                non nobis doloribus enim porro eos saepe praesentium sed
                explicabo, consequuntur officia? Aperiam fugiat expedita, a
                atque, dicta numquam, et omnis fuga corporis delectus autem quam
                excepturi enim. Autem cumque fugit illo omnis architecto. Quas
                itaque minus ratione vitae corporis ad necessitatibus deleniti
                eius beatae esse modi deserunt sequi perferendis, quo odio,
                totam voluptatem dolore laborum quia inventore. Quidem minima
                quibusdam id esse hic officia, optio nisi sint sed tempora!
                Facere placeat, sequi voluptas accusamus quas quidem similique,
                qui molestiae nam id, dolorem dolores. Molestias aspernatur,
                deleniti tempore, sapiente autem dicta illo repudiandae quasi
                atque amet nisi quam et similique nesciunt ab facere ullam, quas
                eveniet nam iure at quaerat mollitia porro.
              </span>
            ) : (
              ""
            )}
          </div>
          {/* Tout savoir sur les paimenets a plusieurs fois */}
          <div className="flex justify-between items-center text-center gap-5 ">
            <p>Tout savoir  sur  les payements échelonner</p>
            <IoIosArrowDown
              className="text-2xl"
              onClick={() => setShow41(!show41)}
            />
          </div>
          <div className=" flex justify-between w-full gap-5">
            {show41 ? (
              <span>
                contenu 1 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Esse, asperiores? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ad eligendi, cumque facere voluptate, magnam
                perferendis praesentium tempore sunt optio dolor nam culpa
                minima alias illo? Similique exercitationem ex animi. Vero sint
                omnis inventore ex adipisci eaque dicta illo eius veritatis
                doloribus dolores, quis mollitia dignissimos. Dolore libero
                omnis tempore in qui? Voluptate maiores velit labore illum
                voluptates tenetur amet doloremque repellendus, dolorum
                doloribus dolore corporis natus voluptas praesentium sit ipsum.
                Aspernatur obcaecati sequi assumenda autem, illo odit dolorum
                aliquam? In tempore reprehenderit voluptas? Natus odio dolorem
                perspiciatis voluptates labore commodi, suscipit sed laboriosam
                laudantium voluptatum dolore in eum alias debitis aperiam nemo
                dignissimos, totam pariatur tempore mollitia laborum?
                Consectetur, dignissimos doloribus sint quasi deleniti illo enim
                recusandae in tenetur, voluptatibus iste veniam! Perspiciatis
                dolore deserunt quo aliquam quam, id eum veniam distinctio
                vitae. Sint, unde esse, ducimus deserunt saepe laudantium, error
                doloremque quae ratione veritatis aliquid dolorum voluptatum
                cupiditate exercitationem eius consequatur fugit officia eveniet
                eaque assumenda minima distinctio quaerat voluptatem nobis! Quia
                dolorum beatae alias. Necessitatibus pariatur sapiente quia
                molestias culpa quo eligendi impedit laborum? Iste, corporis et.
                Magnam consectetur ipsa quasi atque ratione in eligendi, ipsum
                non nobis doloribus enim porro eos saepe praesentium sed
                explicabo, consequuntur officia? Aperiam fugiat expedita, a
                atque, dicta numquam, et omnis fuga corporis delectus autem quam
                excepturi enim. Autem cumque fugit illo omnis architecto. Quas
                itaque minus ratione vitae corporis ad necessitatibus deleniti
                eius beatae esse modi deserunt sequi perferendis, quo odio,
                totam voluptatem dolore laborum quia inventore. Quidem minima
                quibusdam id esse hic officia, optio nisi sint sed tempora!
                Facere placeat, sequi voluptas accusamus quas quidem similique,
                qui molestiae nam id, dolorem dolores. Molestias aspernatur,
                deleniti tempore, sapiente autem dicta illo repudiandae quasi
                atque amet nisi quam et similique nesciunt ab facere ullam, quas
                eveniet nam iure at quaerat mollitia porro.
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <img className="max-h-96  max-w[400px]    rounded-full shadow-sm border border-neutral-400" src={assets.about_img} alt="" />

      </div>

      <div className="text-xl py-4">
        <Title text1={"Pourquoi"} text2={"Nous Choissir"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Assurance qualité :</b>
          <p className=" text-gray-600">
            L'assurance qualité, généralement abrégée QA, est le processus qui
            consiste à vérifier que les services ou produits d'une organisation
            répondent aux normes de qualité souhaitées et attendues.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Avantage de notre service :</b>
          <p className=" text-gray-600">
          Avec notre interface conviviale et notre processus de commande sans tracas
          consiste à vérifier que les services ou produits d'une organisation
          répondent aux normes de qualité souhaitées et attendues.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Service client exceptionnel :</b>
          <p className=" text-gray-600 ">
          Avec notre interface conviviale et notre processus de commande sans tracas
          consiste à vérifier que les services ou produits d'une organisation
          répondent aux normes de qualité souhaitées et attendues.
          </p>
        </div>
      </div>
<NewsletterBox />
    </div>
  );
};

export default About;
