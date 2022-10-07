import * as React from "react"
import { HeadFC, Link } from "gatsby"
import '../styles/global.css'
import { StaticImage } from "gatsby-plugin-image"
import { useEffect } from "react"

const IndexPage = () => {
  useEffect(() => {
    const element = document.documentElement;
    const bottom = element.scrollHeight - element.clientHeight;
    window.scroll(0, bottom);
  },[])
  return (
    <div className="flex h-screen justify-center items-center bg-[#E0E5EB] bg-custom-background-pattern ">

      <div className="flex min-w-[667px] rotate-[-90deg] md:rotate-[0deg] transform-gpu">
        <div className="flex flex-col items-center">
          <span className="w-40 md:w-fit">
            <StaticImage src="../../static/images/bexLogo.png" alt={""} width={200} />
          </span>

          <p className="text-xl md:text-4xl font-notosans mt-4">ベーシックエクステンション</p>
          <p className="text-base md:text-xl font-notosans text-center mt-5 text-gray-500">オリジナルアプリ制作 が可能 <br />いつもで相談 OK</p>
          <p className="text-xs md:text-lg font-notosans text-center text-gray-500 ">※クライアント/サーバー どちらも開発します。※</p>
        </div>

        <div className="w-[10px] bg-[#C6CBD2] ml-6 mr-6" />

        <div className="">
          <Link to="mailto: bex.proprietor@gmail.com">
            <div className="flex place-items-center gap-4 w-fit p-2 rounded-lg ">
              <span className="w-7">
                <StaticImage src="../../static/images/mail-icon.png" alt={""} />
              </span>
              <p className="text-xl md:text-2xl font-notosans">bex.proprietor@gmail.com</p>
            </div>
          </Link>

          <Link to="https://twitter.com/bex_tec">
            <div className="flex place-items-center gap-4 w-fit p-2 rounded-lg ">
              <span className="w-9">
                <StaticImage src="../../static/images/twitter-icon.png" alt={""} />
              </span>
              <p className="text-xl md:text-2xl font-notosans ">@bex_tec</p>
            </div>
          </Link>
        </div>
      </div>


      {/* <div className="p-5 ">
        <p className="text-xl text-white font-bold">Skill set　:</p>
        <p className="text-xl text-white font-bold">React（and Next.js）,Expo, NodeJS, Laravel, MySQL, docker</p>
      </div> */}


    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Bex-Info</title>
