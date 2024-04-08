import bg from "../../assets/images/bg.jpg"

const Hero = () => {
  return (
    <div 
      className="w-full h-[50vh] flex items-center md:justify-between justify-center md:px-24 px-5 bg-cover bg-no-repeat bg-center relative"
      style={{backgroundImage: `url(${bg})`}}
    >
        <div className="flex flex-col gap-8 z-50">
          <span className="text-5xl font-semibold text-purple-100">Seja bem vindo ao Tech Jobs</span>
          <p className="text-gray-200 max-w-[600px] leading-7">
            Conectamos desenvolvedores talentosos a oportunidades empolgantes na indústria de tecnologia. Com recursos avançados de pesquisa e suporte 
            para destacar suas habilidades, estamos aqui para impulsionar sua carreira. Explore nossas vagas e junte-se à nossa comunidade hoje mesmo! 
          </p>
        </div>
        <div className="w-full h-[calc(50vh-60px)] z-10 bg-purple-900 opacity-60 absolute top-[60px] left-0">

        </div>
    </div>
  )
}

export default Hero