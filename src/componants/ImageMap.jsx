
 import React from 'react'
import TextType from '../componants/TextType'
import Button from '../componants/Button'

function  ImageMap() {
  return (
    <section className="relative overflow-hidden ">
          
          <div className="relative bg-hero flex items-center justify-center">
            <div className=" w-[1256px]  border-2 border-amber-50 relative z-10 flex h-[600px] flex-col items-center justify-center py-20 text-center bg-cover bg-center"style={{
    backgroundImage: "url('/src/assets/mapimage.png')",
           }}>
               {/* <div className="absolute inset-0 bg-black/40" /> */}
              {/* <p className="text-sm font-semibold tracking-widest uppercase text-primary ">
                Environmental Intelligence
              </p>
              <h1 className="max-w-4xl mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                Protect the environment and build a sustainable future with Geotrics
              </h1>
              <p className="max-w-2xl mt-5 text-base text-white/70 md:text-lg">
                Satellite-powered monitoring for deforestation, urban expansion, and climate risk—delivered as a beautiful web platform.
              </p> */}
               {/* <h1  className="z-10 max-w-4xl mt-4 text-4xl font-extrabold leading-tight tracking-tight  md:text-6xl bg-gradient-to-r from-white to-[#FFA500] bg-clip-text text-transparent drop-shadow-[0_0_10px_var(--glow)]">
                                 <TextType 
                                      text={["Smart Mining Detection Through AI & Satellite Intelligence",""]}
                                      typingSpeed={70}
                                      pauseDuration={1300}
                                      showCursor={true}
                                      cursorCharacter="|"
                                    />
                                    </h1>
               <p>Detect. Analyze. Comply. Sustain.</p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Request demo
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10">
                  Explore product
                </Button> 
               </div>  */}

              {/* <div className="relative w-full max-w-4xl mt-10">
                <div className="w-full mx-auto overflow-hidden border shadow-2xl rounded-xl border-white/15 bg-black/30 backdrop-blur-sm">
                  <div className="relative h-[420px] w-full">
                    <iframe
                      src="https://my.spline.design/planetearth-ioCDlv0GlizPd802ZJsIynvv/"
                      title="3D Earth"
                      className="absolute inset-0 w-full h-full"
                      frameBorder={0}
                    />
                  </div>
                </div>
              </div> */}
            </div>
            {/* </div> */}
            {/* <div className="pointer-events-none hero-grid" /> */}
            {/* <div className="hero-glow" /> */}
          </div>
        </section>
  )
}

export default  ImageMap
