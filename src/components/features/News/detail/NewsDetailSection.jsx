
import Image from "next/image";


const recentNews = [
    {
        date: "November 10, 2025",
        title: "10 Heart-Healthy Foods to Include in Your Diet",
        image: "/images/news1.jpg",
    },
    {
        date: "November 12, 2025",
        title: "Understanding Joint Replacement Surgery",
        image: "/images/news2.jpg",
    },
    {
        date: "November 14, 2025",
        title: "Hospital Achieves New Safety Milestone",
        image: "/images/news3.jpg",
    },

];


export default function NewsDetailSection() {
    return (
        <section className="py-[40px_50px] border border-t-[rgb(145,145,147,0.25)]">
            <div className="container">
                <div className="flex flex-wrap w-full">
                    <div className="lg:w-[calc(100%-295px)] xl:w-[calc(100%-365px)] 2xl:w-[calc(100%-440px)] 3xl:w-[calc(100%-550px)] lg:pr-[25px] xl:pr-[30px] 2xl:pr-[40px] 3xl:pr-[50px]">
                        <div className="w-full mb-[15px] rounded-[6px] aspect-[1100/455]">
                            <Image src="/images/newsDetail.jpg" className="w-full object-cover" width="1100" height="455" alt="img" />
                        </div>
                        <div className="2xl:text-[20px] 3xl:text-[25px] text-[#212121] font-normal mb-[8px]">The Latest Advances in Cataract Surgery
                        </div>
                        <div className="flex items-center gap-3 mb-[15px]">
                            <div className="flex items-center">
                                <div className="w-[25px] h-[25px] rounded-full flex overflow-hidden">
                                    <Image src="/images/avatar3.png" className="w-full object-cover" width="25" height="25" alt="img" />
                                </div>
                                <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] font-medium text-black w-[calc(100%-25px)] pl-[5px]">Sarah James</div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-[15px] h-[15px] rounded-full flex items-center overflow-hidden">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" >
                                        <path d="M7.97713 0.414062C3.5832 0.414062 0 3.99726 0 8.39119C0 12.7851 3.5832 16.3612 7.97713 16.3612C12.3711 16.3612 15.9472 12.7851 15.9472 8.39119C15.9477 8.29543 15.9293 8.20051 15.893 8.11191C15.8566 8.02331 15.8031 7.94279 15.7354 7.87501C15.6678 7.80723 15.5874 7.75353 15.4988 7.71701C15.4103 7.6805 15.3154 7.66189 15.2197 7.66226C15.1244 7.66263 15.0301 7.68179 14.9422 7.71864C14.8544 7.75549 14.7746 7.80931 14.7076 7.87702C14.6405 7.94472 14.5875 8.02499 14.5515 8.11322C14.5155 8.20145 14.4973 8.2959 14.4978 8.39119C14.4978 12.0018 11.5878 14.9119 7.97713 14.9119C4.36649 14.9119 1.44936 12.0018 1.44936 8.39119C1.44936 4.78055 4.36649 1.86342 7.97713 1.86342C8.16835 1.86268 8.35152 1.78638 8.48673 1.65117C8.62194 1.51596 8.69823 1.33279 8.69898 1.14157C8.69935 1.04641 8.68097 0.952098 8.6449 0.864033C8.60882 0.775969 8.55576 0.695872 8.48873 0.628316C8.4217 0.56076 8.34202 0.507069 8.25424 0.470307C8.16646 0.433545 8.0723 0.414434 7.97713 0.414062ZM10.7272 0.958986C10.4443 0.961725 10.1772 1.13066 10.0634 1.40908C9.91066 1.77987 10.087 2.20425 10.4583 2.35598C10.4668 2.35954 10.4723 2.36419 10.4794 2.36721C10.8502 2.52415 11.2781 2.34858 11.432 1.97656C11.5853 1.60725 11.4103 1.18348 11.0413 1.02966C11.0309 1.02528 11.0194 1.01788 11.0102 1.01405C10.9175 0.975869 10.8215 0.958028 10.7272 0.958986ZM13.0853 2.52724C12.8943 2.52881 12.7117 2.60546 12.5771 2.74096C12.2926 3.02422 12.2926 3.48527 12.5771 3.76853C12.5832 3.77455 12.5867 3.77811 12.5928 3.78414C12.8745 4.07013 13.3356 4.07284 13.6203 3.78989C13.9048 3.50663 13.9048 3.04558 13.6203 2.76232C13.6129 2.75492 13.6066 2.74835 13.5992 2.74123C13.4634 2.60442 13.2781 2.5274 13.0853 2.52724ZM7.97713 3.31419C7.88137 3.31363 7.78644 3.33205 7.69785 3.3684C7.60925 3.40474 7.52873 3.45829 7.46095 3.52594C7.39317 3.59358 7.33947 3.674 7.30295 3.76252C7.26644 3.85105 7.24783 3.94594 7.2482 4.0417V8.39119C7.24859 8.52569 7.28639 8.65742 7.35738 8.77166C7.42837 8.88589 7.52975 8.97812 7.65017 9.03802L10.5489 10.4874C10.6342 10.5301 10.7271 10.5556 10.8222 10.5624C10.9174 10.5691 11.0129 10.5571 11.1034 10.5268C11.1939 10.4966 11.2775 10.4488 11.3494 10.3861C11.4214 10.3235 11.4802 10.2473 11.5227 10.1618C11.5654 10.0766 11.5909 9.98368 11.5977 9.88853C11.6044 9.79337 11.5924 9.69782 11.5621 9.60735C11.5319 9.51688 11.4841 9.43327 11.4214 9.36131C11.3588 9.28936 11.2826 9.23048 11.1971 9.18805L8.69898 7.9411V4.0417C8.69935 3.94654 8.68097 3.85223 8.6449 3.76416C8.60882 3.6761 8.55576 3.596 8.48873 3.52845C8.4217 3.46089 8.34202 3.4072 8.25424 3.37044C8.16646 3.33368 8.0723 3.31456 7.97713 3.31419ZM14.6691 4.87254C14.5742 4.87199 14.4777 4.89006 14.3846 4.92915C14.0125 5.08297 13.837 5.51093 13.9939 5.8817C13.9975 5.89047 14.0022 5.8954 14.0052 5.90279C14.1569 6.274 14.5813 6.45186 14.9521 6.2991C15.3233 6.14739 15.5011 5.72299 15.3484 5.35221C15.3443 5.34235 15.3407 5.33413 15.3371 5.32537C15.2234 5.04475 14.9537 4.87418 14.6691 4.87254Z" fill="#671448" />
                                    </svg>
                                </div>
                                <div className="text-[10px] 2xl:text-[12px] 3xl:text-[16px] text-medium text-[#671448] w-[calc(100%-15px)] pl-[5px]">8 mins read</div>
                            </div>
                        </div>
                        <div className="[&>p]:mb-[15px]">
                            <p>Dummy text used in laying out pring There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
                                there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
                                to generate Loreout print, graphic or web designs.t, graphic or web designs. century who is thougeb designs...</p>
                            <p>
                                Dummy text used in laying out pring There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making t
                                his tDummy text used in laying out pring There are many variations of passages of Lorem Ipsum available, butDummy text used in laying out pring There are many
                                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even
                                slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses
                                a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Loreout print, graphic or web designs.t, graphic or
                                web designs. century who is thougeb designs... the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even
                                slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the
                                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary
                                of over 200 Latin words, combined with a handful of model sentence structures, to generate Loreout print, graphic or web designs.t, graphic or web designs. century
                                who is thougeb designs...he first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                                a handful of model sentence structures, to generate Loreout print, graphic or web designs.t, graphic or web designs. century who is thougeb designs...
                            </p>
                            <p>
                                Dummy text used in laying out pring There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
                                isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
                                the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                                a handful of model sentence structures, to generate Loreout print, graphic or web designs.t, graphic or web designs. century who is thougeb designs...
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[295px] xl:w-[365px] 2xl:w-[440px] 3xl:w-[550px]">
                        <div className="text-[12px] 2xl:text-[14px] 3xl:text-[18px] font-regular uppercase text-[#00335B] tracking-widest mb-[15px]">
                            RECENT NEWS
                        </div>
                        <div className="flex flex-wrap w-full -m-[6px] 3xl:-m-[9px]">
                            {recentNews.map((news, idx) => (
                                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-full p-[6px] 3xl:p-[9px]" key={idx}>
                                    <div className="flex flex-wrap w-full">
                                        <div className="w-[75px] xl:w-[90px] 2xl:w-[110px] 3xl:w-[140px] rounded-[6px] overflow-hidden">
                                            <Image
                                                src={news.image}
                                                className="w-full h-full object-cover"
                                                width={140}
                                                height={125}
                                                alt={news.title}
                                            />
                                        </div>
                                        <div className="w-[calc(100%-75px)] xl:w-[calc(100%-90px)] 2xl:w-[calc(100%-110px)] 3xl:w-[calc(100%-140px)] pl-[15px]">
                                            <div className="text-[10px] 2xl:text-[11px] 3xl:text-[14px] text-[#313131] font-light pl-[10px] relative 
                                                    before:absolute before:top-[4px] before:2xl:top-[6px] before:3xl:top-[8px] before:left-0 before:content-[''] 
                                                    before:w-[2px] before:h-[2px] before:rounded-full mb-[5px] 2xl:mb-[8px] 3xl:mb-[10px] before:bg-[#313131]" >
                                                {news.date}
                                            </div>
                                            <div className="text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] mb-[8px] text-[#212121] font-normal line-clamp-2 
                                                capitalize  lg:w-[200px] 2xl:max-w-[240px] 3xl:max-w-[300px]">
                                                {news.title}
                                            </div>
                                            <div className="border-[rgba(0,51,91,0.1)] border-t pt-[10px] 2xl:pt-[12px] 3xl:pt-[15px]">
                                                <div className="text-[8px] lg:text-[10px] 2xl:text-[11px] 3xl:text-[15px] text-[#671448] font-medium uppercase flex items-center transition-all duration-200 group-hover:text-base2 group-hover:tracking-[1px]">
                                                    Read More
                                                    <div className="w-[9px] lg:w-[13px] h-[9px] lg:h-[13px] flex mx-[10px]">
                                                        <svg
                                                            width="13"
                                                            height="9"
                                                            viewBox="0 0 13 9"
                                                            className="transition-all duration-100 fill-base1 group-hover:fill-base2 group-hover:translate-x-1"
                                                            fill="none"
                                                        >
                                                            <path d="M8.28555 0.119972C8.12709 0.280054 8.12669 0.540068 8.28555 0.70015L11.6143 4.06224L0.406284 4.06224C0.182 4.06224 -2.05418e-07 4.2459 -1.95508e-07 4.47261C-1.85598e-07 4.69933 0.182034 4.88298 0.406284 4.88298L11.6143 4.88298L8.28596 8.24507C8.12709 8.40515 8.12709 8.66517 8.28596 8.82525C8.44483 8.98533 8.702 8.98533 8.86046 8.82525L12.8824 4.76272C13.0392 4.60426 13.0392 4.34059 12.8824 4.18213L8.86046 0.1196C8.7016 -0.0405157 8.44442 -0.0405151 8.28555 0.119972C8.44442 -0.0405151 8.12709 0.280054 8.28555 0.119972Z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
