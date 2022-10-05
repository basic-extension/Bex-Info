import * as React from "react"
import { HeadFC, Link } from "gatsby"
import '../styles/global.css'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div className="grid gap-4 place-content-center h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-10 ">
      <span className="w-fit">
        <StaticImage src="../../static/images/bexLogo.png" alt={""} width={200} />
      </span>

      <p className="text-xl underline text-white font-bold">個人事業としてWebアプリ・アプリのフロント / バック の制作と運用を承り中</p>

      <div className="p-5 ">
        <p className="text-xl text-white font-bold">Contact</p>
        <div className="flex gap-4">
        <Link to="https://twitter.com/bex_tec">
          <div className="flex place-items-center gap-4 w-fit p-2 rounded-lg ">
              <span className="w-12">
                <StaticImage src="../../static/images/twitter-icon.png" alt={""} />
              </span>
              <p className="text-2xl text-white font-bold ">Twitter</p>
          </div>
          </Link>

          <Link to="mailto: bex.proprietor@gmail.com">
          <div className="flex place-items-center gap-4 w-fit p-2 rounded-lg ">
            <span className="w-12">
              <StaticImage src="../../static/images/mail-icon.png" alt={""} />
            </span>
            <p className="text-2xl text-white font-bold">Mail</p>
          </div>
          </Link>
        </div>
      </div>


      <div className="p-5 ">
        <p className="text-xl text-white font-bold">Skill set　:</p>
        <p className="text-xl text-white font-bold">React（and Next.js）,Expo, NodeJS, Laravel, MySQL, docker</p>
      </div>


    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Bex-Info</title>
