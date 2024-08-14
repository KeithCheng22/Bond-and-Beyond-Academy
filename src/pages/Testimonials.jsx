"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SlSpeech } from "react-icons/sl";
import { testimonials } from "@/data";
import about from "../../public/about.jpg";
import stars from "../../public/stars.png";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  return (
    <main className="bg-gray-50 py-10 px-4 relative">
      <div
        id="testimonials"
        className="w-[80%] h-[1px] absolute top-[-150px]"
      ></div>
      <div className="text-center text-gray-800">
        <div className="relative flex justify-center gap-2 items-start max-sm:mb-6 mb-12">
          <h2 className="text-3xl font-semibold mb-8 text-gray-700 z-10">
            Not convinced?
          </h2>
          <svg
            viewBox="0 0 1150 800"
            width="100%"
            height="500"
            id="svg2"
            className="absolute inset-0 m-auto z-0"
          >
            <defs id="defs6" />
            <path
              d="m 243.70049,485.47088 c -4.96809,-0.33871 -13.33859,-0.83882 -18.60111,-1.11134 -18.73557,-0.97022 -30.31963,-1.67685 -31.88661,-1.94508 -0.87443,-0.14968 -4.33959,-0.45983 -7.70035,-0.6892 -3.36076,-0.22937 -6.94432,-0.59297 -7.96346,-0.80798 -1.01914,-0.21501 -3.40701,-0.50309 -5.30638,-0.64018 -6.26471,-0.45215 -12.02093,-1.32376 -16.5804,-2.51062 -1.76715,-0.45999 -3.45153,-0.69721 -3.74304,-0.52715 -0.29152,0.17007 -0.36723,0.0602 -0.16825,-0.24415 0.2449,-0.37458 -1.52414,-0.62214 -5.47551,-0.76625 -3.21051,-0.11708 -6.19153,-0.35928 -6.62449,-0.5382 -0.43296,-0.17892 -0.92235,-1.16285 -1.08752,-2.1865 -0.34153,-2.11661 -0.90086,-2.44243 -5.97973,-3.48331 -1.89298,-0.38795 -4.86616,-1.20591 -6.60707,-1.81769 -1.7409,-0.61178 -3.79404,-1.24955 -4.56254,-1.41728 -2.19418,-0.47889 -2.15531,-1.65481 0.12861,-3.89137 2.40173,-2.3519 4.29518,-3.3313 8.14868,-4.215 2.4986,-0.57297 5.91767,-2.94855 5.94783,-4.13255 0.0101,-0.39771 -2.27988,-1.17059 -5.54119,-1.87017 -0.87347,-0.18736 -3.73717,-0.52798 -6.36378,-0.75694 -2.62662,-0.22895 -6.11966,-0.80132 -7.76234,-1.27193 -1.82565,-0.52303 -5.49648,-0.91959 -9.44305,-1.02012 -7.008797,-0.17854 -10.005887,-1.00921 -10.448247,-2.89583 -0.14985,-0.63908 -1.45795,-1.65032 -3.32579,-2.57105 -1.69333,-0.83471 -2.95083,-1.71336 -2.79443,-1.95257 0.15639,-0.23922 -0.0301,-0.33411 -0.41434,-0.21086 -1.7259,0.5535 -4.29562,-0.66712 -5.20549,-2.4726 -0.99167,-1.96781 -0.52465,-3.7824 0.96371,-3.74448 0.42855,0.0109 0.78564,-0.15963 0.79355,-0.37899 0.008,-0.21936 1.62995,-0.42672 3.60456,-0.4608 1.9746,-0.034 3.67583,-0.29015 3.78052,-0.56904 0.10469,-0.27889 0.635,-0.49574 1.17847,-0.48189 0.54347,0.0138 1.14216,-0.21043 1.33042,-0.49838 0.18827,-0.28795 0.58166,-0.51745 0.87422,-0.51 0.29256,0.007 0.41007,0.19994 0.26113,0.42775 -0.14895,0.22781 0.43076,0.42273 1.28822,0.43317 0.92075,0.0112 1.56631,-0.26656 1.5768,-0.67848 0.01,-0.3836 0.253357,-0.54342 0.541317,-0.35515 0.28795,0.18826 0.52935,0.11441 0.53644,-0.16411 0.0209,-0.82061 -1.363707,-1.15559 -3.812367,-0.92232 -1.25994,0.12001 -3.361,-0.0814 -4.66903,-0.44805 -1.30803,-0.36644 -2.73551,-0.74503 -3.17218,-0.8413 -0.43668,-0.0963 -1.21183,-0.36571 -1.72258,-0.59874 -0.51075,-0.23303 -1.40672,-0.31159 -1.99103,-0.17459 -1.35885,0.31862 -1.80411,-0.41702 -0.75341,-1.24476 0.44482,-0.35043 0.80711,-0.42822 0.80509,-0.17287 -0.002,0.25535 0.17828,0.2294 0.40067,-0.0577 0.684,-0.88295 2.8333,-1.8464 2.81845,-1.26338 -0.008,0.29504 0.23983,0.54289 0.54965,0.55078 0.30982,0.008 0.45122,-0.1778 0.31421,-0.41266 -0.35341,-0.60581 3.91755,-0.59255 4.98726,0.0155 0.57135,0.32477 1.11002,0.29455 1.50904,-0.0847 0.71653,-0.68093 2.86064,-0.90666 2.4355,-0.2564 -0.49542,0.75775 1.21546,0.50628 1.902217,-0.2796 0.48899,-0.55956 0.99423,-0.61501 1.96827,-0.216 1.68366,0.6897 2.25579,0.68845 1.25486,-0.002 -0.58797,-0.40602 -0.31829,-0.51924 1.07605,-0.45179 1.02335,0.0495 3.66279,-0.13521 5.86542,-0.41047 2.20261,-0.27527 4.64569,-0.51632 5.42903,-0.53568 2.32912,-0.0575 1.70483,-1.85073 -1.40315,-4.03034 -1.77567,-1.24527 -2.61538,-2.17213 -2.41255,-2.66294 0.19813,-0.47943 0.5256,-0.57304 0.90168,-0.25773 0.32481,0.27231 1.07422,0.31435 1.66533,0.0934 0.59113,-0.22094 1.96731,-0.3958 3.05818,-0.38859 1.53524,0.0102 2.20023,-0.3001 2.94298,-1.37305 1.2065,-1.74286 1.38042,-2.73004 0.71434,-4.05465 -0.2892,-0.5751 -0.3095,-0.90421 -0.0451,-0.73136 0.26438,0.17285 0.8198,-0.56254 1.23428,-1.63421 0.41447,-1.07166 1.02355,-2.11756 1.35349,-2.32424 0.32994,-0.20665 -0.35738,-0.40747 -1.52738,-0.44624 -1.57125,-0.052 -1.91529,-0.19995 -1.31626,-0.5658 0.61505,-0.37562 0.39161,-0.50795 -0.92475,-0.54768 -0.95467,-0.0286 -2.14588,-0.2796 -2.64714,-0.55734 -0.50127,-0.27773 -3.1103,-1.44616 -5.79786,-2.59649 -5.38981,-2.30695 -8.52469,-2.88132 -19.983647,-3.66137 -8.78144,-0.59778 -9.76795,-0.73152 -11.1442,-1.51073 -1.40099,-0.79322 -8.64256,-2.07657 -13.24192,-2.34673 -2.41083,-0.1416 -4.55409,-0.62728 -6.08908,-1.3798 -1.30282,-0.63871 -3.56008,-1.35296 -5.01613,-1.58723 -2.89559,-0.46589 -6.60223,-1.88453 -6.58603,-2.52067 0.006,-0.22074 1.39809,-0.81795 3.09436,-1.32712 2.60665,-0.78244 4.81368,-0.88769 14.25552,-0.67976 7.5422,0.16609 11.83529,0.0425 13.21499,-0.38043 1.99241,-0.61074 3.90091,-0.4697 8.76523,0.64776 1.25384,0.28804 4.82001,0.63208 7.9248,0.76453 3.104797,0.13245 6.100757,0.49983 6.657707,0.8164 0.59549,0.3385 1.81543,0.42943 2.96161,0.22078 1.07195,-0.19514 2.15914,-0.29848 2.41598,-0.22966 0.94887,0.25428 17.14568,0.50072 18.95032,0.28833 3.05941,-0.36005 6.8987,-0.58019 12.18938,-0.69893 2.74383,-0.0616 5.25454,-0.3645 5.57936,-0.67319 0.57726,-0.54857 -0.39713,-0.85286 -2.14783,-0.67071 -0.36691,0.0382 -0.66009,-0.20607 -0.65151,-0.54275 0.009,-0.33669 -0.32929,-0.48979 -0.75082,-0.34023 -0.42153,0.14955 -1.05292,-0.0918 -1.4031,-0.53626 -0.51127,-0.64899 -0.72637,-0.67445 -1.09201,-0.12925 -0.37111,0.55335 -0.45354,0.54928 -0.44562,-0.022 0.006,-0.44304 -0.36154,-0.59345 -0.99925,-0.40879 -0.67185,0.19454 -1.12105,-0.0238 -1.34448,-0.65356 -0.18455,-0.52015 -0.076,-1.02495 0.24118,-1.12178 0.82016,-0.25037 2.19135,-1.62178 2.20624,-2.2066 0.0208,-0.8156 -2.05945,-2.73852 -2.61313,-2.41553 -0.28292,0.16506 -0.36954,-0.0504 -0.19248,-0.47891 0.24471,-0.59217 0.0333,-0.71133 -0.88162,-0.49682 -0.95581,0.22411 -1.13057,0.10561 -0.84903,-0.57569 0.52454,-1.26931 -0.59256,-1.7097 -1.50539,-0.59345 -0.50026,0.61175 -0.68357,0.67526 -0.50107,0.1736 0.32162,-0.88401 -2.12983,-2.37214 -3.03643,-1.84325 -0.31237,0.18223 -0.37801,0.0598 -0.1527,-0.28482 0.21735,-0.33242 0.14169,-0.61088 -0.16813,-0.61877 -0.30983,-0.008 -0.57247,0.3447 -0.58365,0.78354 -0.0287,1.12616 -1.08122,0.97178 -1.09785,-0.16104 -0.0116,-0.79119 -0.0823,-0.77291 -0.46874,0.12113 -0.25029,0.57912 -0.38524,1.18465 -0.29988,1.34561 0.0854,0.16096 -0.30784,0.3157 -0.87377,0.34386 -1.24442,0.0619 -1.30643,-0.3602 -0.16868,-1.14848 0.66108,-0.45802 0.19215,-0.56595 -2.15788,-0.49661 -1.77367,0.0523 -2.8712,-0.11227 -2.68168,-0.40211 0.17805,-0.27234 -0.15607,-0.37889 -0.75086,-0.23942 -0.62314,0.14611 -1.065,-0.0105 -1.05575,-0.37408 0.009,-0.34395 -0.26852,-0.45941 -0.61618,-0.2566 -0.44409,0.25908 -0.50311,0.069 -0.19843,-0.63898 0.23852,-0.55425 0.49669,-1.33245 0.5737,-1.72932 0.23959,-1.2348 1.60286,-1.56223 3.25518,-0.78182 0.8678,0.40987 1.27812,0.75704 0.91181,0.77148 -1.30713,0.0516 -0.66664,1.0908 0.69362,1.12545 1.00066,0.0255 1.30884,-0.18419 1.10697,-0.75317 -0.15386,-0.43366 -0.0354,-0.93101 0.26319,-1.10522 0.34688,-0.20237 0.30133,-0.63006 -0.12615,-1.18445 -0.5656,-0.73351 -0.53945,-0.81546 0.16898,-0.52983 0.46095,0.18584 1.18153,0.10669 1.6013,-0.17589 0.6028,-0.4058 0.56456,-0.45535 -0.18192,-0.23571 -0.79677,0.23444 -0.8837,0.0521 -0.55379,-1.1615 0.21524,-0.79178 0.58812,-1.56291 0.82862,-1.71363 0.78278,-0.49055 -0.0386,-2.59348 -0.89439,-2.28985 -0.55504,0.19692 -0.73349,-0.0184 -0.59462,-0.71732 0.14517,-0.73055 -0.088,-0.97441 -0.8684,-0.90828 -0.58676,0.0497 -0.76275,-0.0351 -0.39108,-0.18849 0.37167,-0.15339 0.55573,-0.48463 0.40904,-0.73608 -0.14669,-0.25145 0.2231,-0.78198 0.82174,-1.17895 0.59864,-0.39698 0.93441,-0.88385 0.74616,-1.08195 -0.18827,-0.1981 0.11659,-0.35216 0.67744,-0.34236 0.83709,0.0146 0.8816,-0.0745 0.24851,-0.49784 -0.50608,-0.33838 -0.9087,-0.30538 -1.17111,0.096 -0.21994,0.33641 -0.54811,0.45568 -0.72927,0.26505 -0.33212,-0.34949 0.71216,-2.579 1.43061,-3.05428 0.58726,-0.3885 1.32134,-2.8099 0.75099,-2.47716 -0.26953,0.15723 -0.75805,-0.16864 -1.08561,-0.72415 -0.53001,-0.89883 -0.43674,-0.99521 0.84723,-0.87546 0.90936,0.0848 1.39991,-0.11252 1.32677,-0.53373 -0.0638,-0.36756 0.0627,-0.63537 0.28129,-0.59514 1.09279,0.20119 1.73235,-0.0972 1.75068,-0.81684 0.0112,-0.43883 0.27382,-0.79143 0.58365,-0.78353 0.30982,0.008 0.43359,-0.20803 0.27504,-0.47981 -0.15856,-0.27178 0.0155,-0.60772 0.3868,-0.74653 0.40726,-0.15225 0.30622,-0.27844 -0.25472,-0.31808 -0.51139,-0.0361 -0.92512,-0.24938 -0.9194,-0.47387 0.006,-0.22449 -0.82728,-0.39012 -1.85111,-0.36808 -1.02383,0.022 -1.72334,-0.17126 -1.55445,-0.42957 0.16888,-0.25831 -0.19993,-0.48257 -0.81958,-0.49836 -0.61964,-0.0158 -0.97259,-0.2643 -0.78434,-0.55225 0.18827,-0.28795 0.0632,-0.53066 -0.27793,-0.53934 -0.35652,-0.009 -0.46831,-0.3834 -0.26293,-0.88039 0.29874,-0.72292 0.22175,-0.75781 -0.4699,-0.21293 -0.67852,0.53453 -0.82352,0.5077 -0.80678,-0.14932 0.0112,-0.44054 0.50232,-0.91398 1.09133,-1.05208 0.64463,-0.15115 1.08234,-0.69846 1.09957,-1.37489 0.0241,-0.9464 -0.20351,-1.08078 -1.44206,-0.85137 -1.20684,0.22354 -1.30422,0.17218 -0.5428,-0.28629 0.86211,-0.51911 0.84932,-0.65381 -0.18064,-1.90115 -0.60967,-0.73833 -1.46426,-1.3515 -1.89911,-1.36257 -1.60066,-0.0408 -0.15461,-0.56418 1.99769,-0.72307 1.296,-0.0957 2.08797,0.0398 1.90139,0.32514 -0.17587,0.269 -0.0804,0.4952 0.21215,0.50265 0.29256,0.007 0.65921,-0.18113 0.81477,-0.41907 0.15557,-0.23793 1.07122,-0.36782 2.03477,-0.28863 0.96356,0.0792 2.03537,-0.0665 2.3818,-0.32375 0.38698,-0.28738 0.75764,-0.24872 0.96122,0.10026 0.22434,0.38454 0.65599,0.40474 1.33651,0.0625 0.55284,-0.278 1.56118,-0.47096 2.24077,-0.4288 1.88816,0.11714 8.42061,-0.29913 8.87756,-0.5657 0.35596,-0.20766 6.18107,-0.79971 7.9639,-0.80943 0.93374,-0.005 0.89582,-2.50695 -0.0492,-3.24548 -0.4299,-0.33598 -0.81794,-1.27588 -0.86229,-2.08868 -0.0501,-0.91798 -0.33073,-1.38908 -0.74082,-1.24357 -0.38656,0.13714 -0.53802,-0.0614 -0.36543,-0.47903 0.19257,-0.46597 -0.25566,-0.84892 -1.29286,-1.10458 -1.74407,-0.42989 -2.96258,-1.62239 -2.45347,-2.40108 0.18344,-0.28057 -0.14211,-0.38805 -0.7463,-0.24638 -0.76342,0.179 -1.06501,-0.0104 -1.0485,-0.65845 0.0127,-0.50035 -0.45238,-1.04711 -1.03359,-1.21503 -1.18018,-0.34096 -1.3541,-0.99579 -0.41065,-1.54618 0.39115,-0.22819 0.47324,-0.13364 0.22011,0.25352 -0.22201,0.33957 -0.20547,0.58815 0.0368,0.55242 1.13967,-0.16821 1.76518,0.16757 1.74557,0.93706 -0.0279,1.0966 1.26004,0.70363 1.51724,-0.46291 0.10868,-0.49293 -10e-4,-0.86669 -0.24498,-0.83059 -1.47311,0.21857 -2.29829,-0.21812 -2.27321,-1.20296 0.0153,-0.60238 0.2635,-0.9412 0.55145,-0.75294 0.28796,0.18826 0.5361,-0.15056 0.55145,-0.75294 0.0153,-0.60239 0.36134,-1.08675 0.76887,-1.07637 0.40755,0.0104 0.893,-0.34897 1.07879,-0.79857 0.18579,-0.44959 0.11586,-0.68796 -0.15541,-0.52971 -0.27127,0.15825 -0.58896,-0.0171 -0.70599,-0.38955 -0.11703,-0.37249 -0.16053,-0.25677 -0.0967,0.25716 0.0639,0.51394 -0.10084,0.9289 -0.36601,0.92215 -0.26518,-0.007 -0.47487,-0.2974 -0.46599,-0.64587 0.009,-0.34848 -0.3343,-0.17909 -0.76262,0.37641 -0.57165,0.74137 -0.61833,1.11487 -0.17555,1.40437 0.34626,0.22638 0.13494,0.34708 -0.49615,0.28334 -0.97599,-0.0986 -1.6288,-1.50815 -0.68736,-1.48416 0.20724,0.005 0.5387,-0.70485 0.73659,-1.57805 0.28579,-1.26103 0.63611,-1.58061 1.70292,-1.55343 0.7387,0.0188 1.3492,-0.20515 1.35665,-0.49771 0.007,-0.29256 0.49228,-0.51973 1.0774,-0.50482 1.12665,0.0287 1.41049,0.81106 0.48924,1.34849 -0.98351,0.57376 -0.0773,1.19781 1.59488,1.09832 2.17713,-0.12952 2.71045,-0.7141 0.75784,-0.83067 -1.52094,-0.0908 -1.5249,-0.099 -0.21065,-0.43719 l 1.33946,-0.34464 -1.18025,-0.68151 c -1.35987,-0.78523 -1.53943,-1.71774 -0.32482,-1.68681 0.45611,0.0116 0.67525,0.25673 0.48698,0.54468 -0.18826,0.28796 -0.0888,0.53001 0.22102,0.5379 0.30982,0.008 0.57551,-0.46438 0.59042,-1.0495 0.0165,-0.64446 0.38171,-1.05481 0.92665,-1.04093 0.7826,0.02 0.76782,-0.0791 -0.11367,-0.76171 -0.80917,-0.62662 -1.07028,-0.64795 -1.29663,-0.10593 -0.17214,0.41221 -0.67097,0.52899 -1.2704,0.29741 -0.92753,-0.35832 -0.93132,-0.43417 -0.063,-1.25938 0.50821,-0.48295 1.26596,-0.86938 1.6839,-0.85874 0.68655,0.0175 1.01034,-0.62035 0.86692,-1.70779 -0.0291,-0.2203 0.32035,-0.39104 0.77645,-0.37942 0.4561,0.0116 0.69724,-0.20521 0.53586,-0.48184 -0.38194,-0.6547 0.6435,-1.2491 1.35377,-0.78473 0.37529,0.24536 0.34585,0.59136 -0.093,1.09359 -0.46157,0.52818 -0.4742,0.73894 -0.045,0.74987 0.62378,0.0159 0.80914,-0.62364 0.67192,-2.31833 -0.10725,-1.3246 0.91474,-1.88127 3.35786,-1.82902 1.17502,0.0251 1.9464,-0.19959 1.87687,-0.54677 -0.0755,-0.3768 1.03342,-0.56795 3.07404,-0.52991 1.75565,0.0327 3.49789,-0.16786 3.87163,-0.44577 0.37374,-0.27789 1.37261,-0.3482 2.2197,-0.15623 1.09644,0.24849 1.74671,0.0925 2.25707,-0.54157 0.3943,-0.48984 0.49943,-0.71518 0.23363,-0.50076 -0.26579,0.21443 -1.13316,-0.64599 -1.92747,-1.91204 -0.79432,-1.26604 -1.45075,-2.08531 -1.45876,-1.82057 -0.008,0.26473 -0.48223,0.0358 -1.05386,-0.50855 -0.57162,-0.54442 -1.02537,-1.25179 -1.00831,-1.57192 0.017,-0.32013 0.26433,-0.15694 0.54948,0.36263 0.28515,0.51957 0.9135,0.95474 1.39631,0.96704 0.6488,0.0165 0.72611,-0.13731 0.2963,-0.58959 -0.31985,-0.33656 -0.43833,-0.95847 -0.26331,-1.382 0.26023,-0.62973 0.39689,-0.63868 0.74991,-0.0491 0.31776,0.53071 0.43652,0.44017 0.45,-0.34311 0.023,-1.33056 -1.18532,-3.07437 -1.7774,-2.56528 -0.24288,0.20881 -0.25927,0.081 -0.0364,-0.28402 0.22284,-0.36503 0.62447,-0.52031 0.89253,-0.34505 0.26805,0.17525 0.49347,0.0793 0.50092,-0.21329 0.007,-0.29256 -0.21176,-0.67923 -0.48714,-0.85926 -0.67272,-0.43983 -0.005,-1.97906 1.21991,-2.81413 0.54596,-0.37206 0.84533,-0.92901 0.66525,-1.23769 -0.21312,-0.36534 0.11017,-0.4164 0.9263,-0.14629 1.02412,0.33894 1.13519,0.28398 0.60656,-0.30012 -0.78636,-0.86888 -0.81027,-2.47729 -0.0403,-2.71234 0.52881,-0.16142 0.67374,-1.07776 0.50886,-3.21712 -0.0429,-0.55638 -0.51939,-0.94799 -1.1799,-0.96968 -0.63677,-0.021 -0.86102,-0.19638 -0.52729,-0.41262 0.83796,-0.54297 1.37954,-2.13545 0.84509,-2.48488 -0.25078,-0.16397 -0.57098,-1.8e-4 -0.71156,0.36403 -0.14057,0.36418 -0.3918,0.53197 -0.55828,0.37288 -0.16648,-0.1591 -0.0822,-0.62646 0.18722,-1.03861 0.41326,-0.63209 0.65751,-0.58972 1.56097,0.27075 1.04599,0.99621 1.07264,0.99639 1.13886,0.008 0.0376,-0.56096 0.17986,-0.71277 0.31916,-0.3405 0.13824,0.36945 0.49639,0.67797 0.79586,0.68561 0.29948,0.008 0.41691,-0.3458 0.26095,-0.78538 -0.15596,-0.43958 -0.11358,-0.75911 0.0942,-0.71004 0.20778,0.0491 1.06324,-0.17327 1.90104,-0.49405 0.8378,-0.32077 1.73909,-0.44212 2.00288,-0.26965 0.2638,0.17249 0.48644,0.046 0.49477,-0.28111 0.008,-0.32709 0.23447,-0.45132 0.50253,-0.27607 0.26805,0.17526 0.63412,0.0942 0.81347,-0.18014 0.17936,-0.27432 0.74022,-0.4862 1.24638,-0.47084 1.46902,0.0446 2.38477,-0.22521 4.83721,-1.4251 1.26646,-0.61962 2.63439,-1.11814 3.03984,-1.10782 0.40544,0.0103 0.84178,-0.27026 0.96961,-0.62354 0.24859,-0.6869 5.21815,-0.89573 5.2009,-0.21854 -0.005,0.21583 0.65292,0.22604 1.46316,0.0226 1.59673,-0.40079 4.97844,-0.23145 7.426,0.37184 1.26977,0.31299 1.66096,0.1569 2.26349,-0.90316 0.40063,-0.70483 0.59221,-1.51504 0.42571,-1.80044 -0.42927,-0.73585 -4.01841,-1.32972 -9.88109,-1.63495 -2.77742,-0.1446 -5.5714,-0.56437 -6.20884,-0.93282 -0.63744,-0.36845 -1.349,-0.64315 -1.58125,-0.61044 -0.23226,0.0327 -1.29127,0.009 -2.35335,-0.0528 -1.45357,-0.0844 -1.99317,-0.37704 -2.18218,-1.18315 -0.20397,-0.86992 0.0142,-1.06736 1.16232,-1.05186 1.35006,0.0182 1.36857,-0.0167 0.41284,-0.77891 -0.89483,-0.71363 -0.48571,-0.77174 3.87053,-0.54981 2.67912,0.13649 4.86847,0.3948 4.86524,0.57402 -0.003,0.17923 0.65434,0.26588 1.46127,0.19257 3.61247,-0.32819 9.12057,-0.64249 11.15622,-0.63657 1.22339,0.004 2.11227,-0.18564 1.9753,-0.42042 -0.13696,-0.23478 0.18489,-0.45129 0.71524,-0.48112 2.09704,-0.11797 2.6006,-0.20288 3.529,-0.59509 0.53049,-0.22411 1.44574,-1.29422 2.03391,-2.37801 1.08563,-2.00046 2.82548,-3.13496 3.15456,-2.05697 0.12583,0.41219 0.42162,0.39916 0.98329,-0.0433 0.50924,-0.40118 0.92966,-0.43778 1.14839,-0.1 0.36409,0.56229 8.94663,0.78561 9.51284,0.24766 0.18171,-0.17269 0.60695,-0.0723 0.94498,0.2231 0.65233,0.57005 3.8645,0.56298 4.84784,-0.0107 0.32212,-0.18791 1.40603,-0.0925 2.40869,0.21202 1.00267,0.30454 6.23735,0.78751 11.63264,1.07327 5.39528,0.28577 12.91835,0.71733 16.71792,0.95902 20.47834,1.30266 26.73231,1.59875 39.47339,1.86884 10.00919,0.21217 13.96022,0.46519 13.94931,0.8933 -0.011,0.43199 0.18162,0.44221 0.6961,0.0369 0.71841,-0.56596 3.92435,-0.63451 13.14913,-0.28114 2.7784,0.10643 5.2915,0.1796 5.58469,0.16259 0.29317,-0.017 3.1719,-0.19219 6.39714,-0.3893 3.22525,-0.1971 6.25969,-0.22446 6.74319,-0.0608 0.48351,0.16368 1.0099,0.0975 1.16976,-0.14699 0.15987,-0.24451 2.28099,-0.44658 4.71359,-0.44903 2.43261,-0.002 5.79788,-0.21128 7.47839,-0.46409 1.68051,-0.25279 6.11766,-0.4887 9.86033,-0.52425 3.74269,-0.0357 8.48275,-0.11287 10.53349,-0.17166 2.05073,-0.0588 4.1705,0.13536 4.7106,0.43144 0.54009,0.29608 0.85472,0.32017 0.69915,0.0535 -0.16021,-0.27464 1.94984,-0.40815 4.86711,-0.30796 2.83247,0.0973 5.9947,-0.0878 7.02718,-0.4113 1.41739,-0.44409 1.96929,-0.43502 2.25305,0.0371 0.25701,0.42756 0.38309,0.44011 0.39887,0.0396 0.014,-0.36046 1.50667,-0.5937 3.88256,-0.60682 5.27895,-0.0291 21.34673,0.32499 24.60365,0.54223 1.46125,0.0975 4.81491,0.0831 7.45258,-0.0318 6.36348,-0.27739 16.239,-0.18765 16.23041,0.1475 -0.0106,0.41382 2.54601,0.29032 6.81777,-0.32933 2.14294,-0.31084 4.53987,-0.37848 5.32652,-0.15027 1.84229,0.53442 5.41448,0.7578 5.42462,0.33921 0.004,-0.17744 0.66605,-0.30519 1.47057,-0.2839 14.87948,0.39383 42.96496,0.111 43.91315,-0.44216 0.22866,-0.13338 0.4103,-0.0305 0.40371,0.22868 -0.007,0.25916 0.70581,0.38445 1.5832,0.27843 0.87735,-0.10603 2.0125,-0.005 2.52251,0.22488 1.17388,0.52867 3.29717,0.7441 3.04321,0.30877 -0.10537,-0.18065 3.92491,-0.17347 8.95621,0.016 5.03129,0.18944 9.14672,0.38543 9.14545,0.43555 0,0.0501 1.49263,0.17655 3.31983,0.28097 1.8271,0.10442 3.32588,0.0356 3.33057,-0.15308 0.005,-0.18861 0.84272,-0.13232 1.8623,0.12509 1.01968,0.25742 1.96211,0.30245 2.09443,0.10009 0.13228,-0.20238 2.40899,-0.29909 5.05923,-0.21491 2.873,0.0912 4.82739,-0.0617 4.84033,-0.37869 0.0132,-0.31352 0.17598,-0.29012 0.39771,0.057 0.46611,0.72969 4.48569,0.79465 5.03818,0.0815 0.26958,-0.34799 0.40244,-0.3446 0.39868,0.0102 0,0.2927 0.89273,0.52701 1.99082,0.52076 1.09815,-0.006 2.54561,0.2103 3.21661,0.48121 0.72959,0.29463 1.61836,0.29221 2.21142,-0.006 0.95581,-0.48061 3.18902,-0.62843 14.67818,-0.97157 2.92963,-0.0875 7.72587,-0.31346 10.65815,-0.50215 2.93227,-0.18869 9.52109,-0.26729 14.64184,-0.17467 5.12076,0.0927 10.27247,0.013 11.4483,-0.17684 1.17583,-0.1899 7.64443,-0.24941 14.37465,-0.13224 15.8065,0.27516 27.70186,0.14764 32.43999,-0.34777 2.0753,-0.21698 6.53506,-0.68359 9.9107,-1.03691 3.37553,-0.35331 9.01684,-0.84489 12.53613,-1.0924 3.51929,-0.24752 7.47891,-0.54245 8.79912,-0.65542 4.32524,-0.37009 8.72588,-0.15875 12.28321,0.58991 2.24322,0.47209 9.06465,0.8731 19.02632,1.11845 8.54116,0.21039 15.69458,0.48632 15.89649,0.61322 0.2019,0.12692 9.21967,0.61254 20.03945,1.07917 10.81977,0.46664 21.58442,1.00986 23.92138,1.20717 13.1212,1.10781 23.08267,1.56388 44.92432,2.05685 3.07212,0.0693 6.42153,0.22257 7.44312,0.34052 2.20952,0.2551 12.43715,0.97804 22.04946,1.55858 20.77466,1.25468 28.52583,1.65881 42.5251,2.21719 8.48105,0.33827 16.25459,0.76597 17.27451,0.95044 1.01992,0.18447 3.76714,0.47185 6.10483,0.63862 4.32627,0.30862 9.26553,1.01853 9.9023,1.42322 0.19355,0.12304 1.98315,0.39011 3.97685,0.59348 1.99375,0.20338 5.05537,0.63397 6.80361,0.95685 1.74825,0.3229 3.89429,0.70372 4.76885,0.84628 0.87461,0.14255 3.53218,0.81315 5.90571,1.49022 2.37354,0.67706 4.81421,1.24374 5.42369,1.25927 0.60957,0.0155 1.10312,0.2277 1.09687,0.47149 -0.006,0.2438 0.28789,0.45359 0.65347,0.46621 3.59189,0.12391 12.17593,1.16112 13.52236,1.63388 0.93809,0.32939 2.19346,1.32232 2.78975,2.20651 1.17744,1.74607 4.36494,3.53509 7.30464,4.09998 3.6781,0.70672 10.045,1.46184 11.3796,1.34964 0.7499,-0.063 1.3569,0.14357 1.3489,0.45913 -0.01,0.31556 0.1512,0.41609 0.354,0.22342 0.2028,-0.19269 0.8557,0.13114 1.4509,0.71959 0.5953,0.58847 2.6781,1.95411 4.6285,3.03477 2.8414,1.57434 4.2952,2.02644 7.3151,2.27481 3.9885,0.32806 4.6934,0.8019 4.2465,2.85446 -0.2847,1.30813 -2.4287,2.33155 -4.76,2.27216 -0.6705,-0.0171 -1.3732,0.20454 -1.5614,0.4925 -0.1882,0.28795 -1.1542,0.50287 -2.1464,0.47759 -2.8013,-0.0714 -7.205,0.90037 -7.2073,1.59038 0,1.13471 4.019,2.6236 7.9788,2.95311 2.1451,0.1785 7.1279,0.54822 11.073,0.82161 7.968,0.55217 8.8022,0.71819 9.1968,1.83017 0.5817,1.63949 -6.8645,6.97553 -12.9321,9.26733 -1.9577,0.73946 -2.9514,1.49574 -3.6347,2.76616 -1.1726,2.18026 -0.6635,3.24443 2.4929,5.21152 1.2248,0.76325 2.2175,1.75378 2.2061,2.20119 -0.011,0.4474 0.3292,1.18165 0.7569,1.63166 1.2127,1.27613 0.8818,2.55661 -0.9199,3.55991 -0.908,0.50564 -2.7021,1.86312 -3.9869,3.01659 -1.9558,1.75589 -2.7613,2.11828 -4.9495,2.22653 -1.9253,0.0952 -2.8555,0.43306 -3.5327,1.28295 -0.5056,0.63452 -0.8089,1.34282 -0.6741,1.574 0.135,0.23119 1e-4,0.41409 -0.2994,0.40646 -0.2995,-0.008 -0.8385,0.51756 -1.1978,1.16709 -0.3591,0.64954 -0.4682,1.01744 -0.2422,0.81758 0.5624,-0.49748 1.9924,1.08452 1.5676,1.73428 -0.1977,0.30244 0.065,0.41896 0.6244,0.27735 0.5309,-0.13432 0,0.20776 -1.1894,0.76025 -1.185,0.55245 -2.9172,0.99132 -3.8491,0.97526 -0.932,-0.0161 -2.3144,0.18859 -3.0721,0.45479 -1.0131,0.35594 -1.3775,0.31144 -1.3773,-0.16814 10e-5,-0.35869 -0.2489,-0.2484 -0.5537,0.24508 -1.0467,1.695 -0.086,3.57889 2.5461,4.99868 1.3645,0.73569 2.8387,1.91528 3.2761,2.62131 0.4373,0.70603 1.7304,1.59008 2.8735,1.96457 4.2603,1.39558 4.8559,4.16965 1.1042,5.14294 -2.3318,0.60493 -3.4802,2.29638 -2.8252,4.16094 0.3409,0.97018 0.3222,1.41072 -0.06,1.401 -0.9826,-0.025 -1.9554,1.27664 -1.9323,2.58575 0.023,1.29463 -0.019,1.31557 -4.5265,2.23727 -0.7357,0.15045 -2.0717,0.8824 -2.9689,1.62654 -0.8973,0.74414 -2.2983,1.67887 -3.1135,2.07719 -0.8153,0.39831 -1.491,1.06869 -1.5017,1.48973 -0.025,0.98777 -1.9571,1.96161 -4.2575,2.14615 -2.5151,0.20175 -3.554,0.82943 -3.6957,2.23293 -0.1181,1.16989 1.9248,3.72258 3.001,3.74999 0.6577,0.0168 3.6003,3.15102 3.5834,3.8168 -0.023,0.91024 -1.9563,1.48638 -5.6755,1.69158 -2.02809,0.11189 -4.89084,0.42747 -6.36154,0.7013 -2.4354,0.45342 -11.12671,1.70592 -13.10776,1.88895 -0.82857,0.0765 -1.23848,1.96597 -0.43101,1.98654 0.24014,0.006 0.18584,0.45228 -0.12061,0.99149 -0.30649,0.53919 -0.39443,1.15172 -0.19536,1.36116 0.6669,0.7018 0.25347,7.45366 -0.50224,8.20242 -0.39453,0.39087 -1.82012,0.75685 -3.16802,0.81329 -2.17529,0.0911 -3.63096,0.88993 -3.15444,1.73107 0.0922,0.1627 -0.17413,0.59595 -0.5919,0.9628 -0.41767,0.36683 -0.75498,0.48997 -0.74951,0.27365 0.005,-0.21633 -0.27871,-0.11895 -0.63154,0.21639 -0.46831,0.44502 -0.82769,0.44712 -1.33037,0.008 -0.50298,-0.43949 -1.12417,-0.43447 -2.30191,0.0186 -2.71499,1.04442 -1.87241,2.66803 1.77534,3.42099 4.07993,0.84217 4.98726,1.2251 4.34624,1.83427 -0.17397,0.16535 -3.96064,0.28491 -8.41489,0.26569 -9.4727,-0.0409 -10.5666,0.36557 -11.43813,4.24982 -0.28189,1.25625 -1.10225,3.16782 -1.82325,4.24791 -1.19106,1.7844 -2.13339,4.11319 -2.22114,5.48881 -0.0186,0.29228 -0.84072,0.58792 -1.82681,0.65699 -1.22983,0.0862 -1.88471,0.44367 -2.08549,1.13849 -0.16094,0.5571 -0.50142,0.8764 -0.75664,0.70954 -0.25523,-0.16686 -0.47027,-0.06 -0.47784,0.23751 -0.007,0.29749 -1.11254,1.14777 -2.45546,1.88951 -3.81001,2.10433 -4.37779,3.88545 -1.60132,5.02282 1.29868,0.53197 1.35141,0.9334 0.41582,3.16189 -0.68604,1.63394 1.03862,2.73441 6.73901,4.30003 5.51826,1.51561 7.05527,2.51374 5.43892,3.53197 -1.00371,0.63233 -8.21123,-0.17206 -19.54663,-2.18143 -5.13536,-0.91034 -7.30489,-0.5504 -8.49717,1.40976 -1.18848,1.95381 -2.41431,2.50972 -5.95191,2.69919 -2.93183,0.15703 -5.69116,1.53776 -5.72495,2.86476 -0.021,0.81386 2.32188,1.64199 5.03633,1.78037 2.04087,0.10404 4.43628,1.56694 3.24165,1.9797 -0.37446,0.12938 -1.04463,0.58098 -1.4893,1.00354 -0.44463,0.42257 -0.80484,0.62538 -0.8004,0.45069 0.0166,-0.64339 -3.25991,1.29194 -3.92392,2.31788 -0.82725,1.27816 -3.62554,2.99759 -4.72778,2.905 -2.7398,-0.23015 -6.3858,0.0372 -6.39683,0.46899 -0.0215,0.82479 2.72432,3.25717 3.29834,2.92232 0.28896,-0.16858 0.35815,-0.0508 0.15391,0.26176 -0.2044,0.31254 -0.12823,0.72732 0.16904,0.92173 0.29731,0.19441 0.39053,0.58309 0.20698,0.86377 -0.18345,0.28067 -0.0454,0.87659 0.30762,1.32429 1.00263,1.27263 -0.0186,1.75531 -4.08721,1.93214 -2.04712,0.089 -4.80527,0.37087 -6.1291,0.62643 -1.32393,0.25557 -5.77134,0.89578 -9.8832,1.42269 -4.11197,0.52689 -8.82032,1.38058 -10.46309,1.89708 -1.67905,0.52791 -4.42983,0.90232 -6.28267,0.85512 -1.81274,-0.0462 -5.04057,0.35831 -7.17309,0.89885 -3.66108,0.92802 -4.91475,0.9407 -22.4874,0.22735 -10.23565,-0.4155 -20.64209,-0.91272 -23.12554,-1.10491 -6.47202,-0.50086 -14.4269,-1.27926 -15.51885,-1.51853 -0.51455,-0.11275 -6.73637,-0.51621 -13.82651,-0.89659 -10.13779,-0.54389 -14.42915,-0.55323 -20.09312,-0.0437 -3.96118,0.35634 -11.24013,0.69034 -16.17558,0.74224 -4.93535,0.0519 -9.84873,0.17842 -10.91865,0.28117 -3.69258,0.35462 -16.35689,0.87491 -23.78844,0.9773 -4.09995,0.0565 -11.5294,0.22489 -16.50986,0.3742 -4.98052,0.14931 -15.04341,0.26552 -22.36192,0.25824 -7.3185,-0.007 -14.02646,0.0473 -14.90664,0.12114 -0.88013,0.0739 -6.89453,0.15317 -13.36543,0.17612 -6.47085,0.023 -12.46108,0.10834 -13.31157,0.18972 -1.63603,0.15655 -5.66606,0.33056 -19.92778,0.86048 -11.19405,0.41594 -19.6002,0.96918 -26.54102,1.74676 -3.01811,0.33812 -6.40205,0.59147 -7.51977,0.563 -1.11768,-0.0285 -2.73189,0.15535 -3.58706,0.4085 -0.85518,0.25314 -3.06812,0.5463 -4.91763,0.65148 -1.84956,0.10516 -5.69463,0.6065 -8.54468,1.11407 -2.85014,0.50758 -6.62143,1.01395 -8.38076,1.12529 -1.75933,0.11133 -4.99995,0.38928 -7.20132,0.61768 -2.20146,0.22839 -5.44189,0.49889 -7.20097,0.60113 -1.75909,0.10225 -5.80328,0.48843 -8.98707,0.8582 -3.18378,0.36977 -7.74472,0.76449 -10.13544,0.87716 -2.39072,0.11266 -5.72324,0.34951 -7.40557,0.52634 -1.68237,0.17682 -5.99678,0.29473 -9.58755,0.26202 -3.59078,-0.0327 -8.32951,0.11341 -10.5305,0.32472 -4.34499,0.41714 -13.59099,0.68346 -20.77375,0.59838 -2.48761,-0.0295 -5.60521,0.12072 -6.92801,0.33376 -1.32279,0.21302 -10.42707,0.31031 -20.23174,0.21618 -9.80466,-0.0941 -18.34341,-0.0784 -18.97499,0.0349 -0.63159,0.11332 -5.78477,0.24982 -11.45152,0.30333 -5.66675,0.0535 -11.50193,0.14222 -12.96707,0.19711 -1.46514,0.0549 -6.85652,0.13935 -11.98084,0.18767 -5.12432,0.0483 -11.35554,0.19214 -13.84715,0.31959 -2.4916,0.12746 -4.76792,0.16161 -5.05848,0.0759 -0.29057,-0.0857 -4.0057,0.0147 -8.25586,0.22298 -4.25016,0.20835 -10.12457,0.44962 -13.05425,0.53616 -2.92969,0.0865 -6.16698,0.23398 -7.19399,0.32766 -1.027,0.0937 -5.1017,0.24178 -9.05488,0.32911 -3.95318,0.0873 -7.31011,0.23008 -7.45985,0.31724 -0.14974,0.0872 -3.26826,0.23673 -6.93005,0.33237 -3.66179,0.0956 -7.13898,0.25775 -7.72708,0.36023 -1.07708,0.1877 -38.77337,-0.0819 -55.07984,-0.39394 -4.82799,-0.0924 -12.84297,-0.4451 -17.81106,-0.78381 z M 135.7499,416.87133 c 0.26521,-0.0108 0.0527,-0.51934 -0.47217,-1.1299 -0.81699,-0.95035 -1.48921,-1.10153 -4.6705,-1.05045 -2.0439,0.0328 -3.8071,0.31319 -3.91824,0.62304 -0.29101,0.81131 3.37488,1.81051 6.18076,1.68465 1.31887,-0.0592 2.61493,-0.11646 2.88015,-0.12734 z m 13.29084,-28.7336 c 0.003,-0.12902 -0.23339,-0.24067 -0.52595,-0.24812 -0.29256,-0.007 -0.53838,0.23994 -0.54628,0.54977 -0.008,0.30982 0.22879,0.42147 0.52595,0.24812 0.29717,-0.17336 0.54299,-0.42076 0.54628,-0.54977 z m -26.72389,-16.56046 c 0.003,-0.11498 -0.36252,-0.36107 -0.81212,-0.54686 -0.46874,-0.19371 -0.68453,-0.10998 -0.50586,0.19629 0.29951,0.5134 1.30701,0.78138 1.31798,0.35057 z m 6.34905,-16.80364 c -0.51205,-0.53481 -0.5747,-0.47527 -0.30535,0.29018 0.18638,0.52969 0.4763,0.83248 0.64424,0.67288 0.16795,-0.1596 0.0154,-0.59298 -0.33889,-0.96306 z m 4.418,-6.27469 c -0.51206,-0.53481 -0.57472,-0.47527 -0.30536,0.29018 0.18639,0.52968 0.4763,0.83248 0.64425,0.67288 0.16794,-0.1596 0.0154,-0.59298 -0.33889,-0.96306 z m -3.97776,-3.15301 c -0.17336,-0.29715 -0.42075,-0.54298 -0.54976,-0.54627 -0.12902,-0.003 -0.24067,0.23339 -0.24812,0.52595 -0.007,0.29256 0.23994,0.53838 0.54977,0.54628 0.30982,0.008 0.42147,-0.22879 0.24811,-0.52596 z m 21.75684,-24.82603 c -0.38007,-0.16344 -0.83934,-0.15624 -1.02059,0.016 -0.18126,0.17226 0.12971,0.30598 0.69103,0.29716 0.62031,-0.01 0.74957,-0.13256 0.32956,-0.31317 z m -0.0643,-1.39548 c -0.79672,-0.6925 -2.05781,-2.79763 -2.04223,-3.4091 0.005,-0.18607 0.36574,-0.0262 0.80222,0.3552 1.03395,0.90354 1.66161,0.298 0.81069,-0.78213 -0.74806,-0.94955 -2.12799,-0.24772 -2.16232,1.09975 -0.0107,0.42028 -0.20616,0.64209 -0.43433,0.49291 -0.22818,-0.14918 -0.46146,0.19002 -0.5184,0.75378 -0.0693,0.6867 0.23671,1.03369 0.92727,1.05128 0.56694,0.0145 1.0247,0.26563 1.01724,0.55819 -0.007,0.29256 0.52522,0.53803 1.18372,0.54549 1.02735,0.0117 1.0864,-0.0828 0.41614,-0.66537 z m -3.16255,-1.21919 c 0.003,-0.12901 0.24911,-0.37641 0.54627,-0.54977 0.29716,-0.17336 0.53384,-0.0617 0.52595,0.24812 -0.008,0.30982 -0.25372,0.55722 -0.54628,0.54977 -0.29255,-0.007 -0.52923,-0.11911 -0.52594,-0.24812 z m 9.68918,-10.82919 c 0.0492,-0.65743 -0.0339,-0.89757 -0.18473,-0.53366 -0.15081,0.36392 -0.48698,0.52256 -0.74704,0.35253 -0.26006,-0.17003 -0.33975,0.066 -0.17709,0.52444 0.43076,1.21409 1.00561,1.03611 1.10886,-0.34331 z m -2.72524,-0.50403 c 0.5961,-0.91173 -0.0509,-1.12452 -0.80288,-0.26404 -0.43244,0.49485 -0.48057,0.79902 -0.12785,0.80801 0.31111,0.008 0.72994,-0.23687 0.93073,-0.54397 z m 17.73078,-17.81927 c 0.003,-0.11498 -0.35021,-0.35598 -0.78476,-0.53556 -0.43454,-0.17958 -0.79599,-0.0947 -0.80321,0.18872 -0.007,0.28338 0.34592,0.52438 0.78476,0.53557 0.43884,0.0112 0.80028,-0.0738 0.80321,-0.18873 z M 82.548773,428.28993 c 0.007,-0.27529 0.25588,-0.64237 0.55305,-0.81572 0.29716,-0.17337 0.53079,0.058 0.51917,0.51408 -0.0116,0.4561 -0.26049,0.82317 -0.55305,0.81572 -0.29256,-0.007 -0.52618,-0.23878 -0.51917,-0.51408 z m 22.799887,-43.18637 c 0.31697,-0.30123 0.88763,-0.43502 1.26812,-0.29733 0.395,0.14294 0.14774,0.37791 -0.57632,0.54769 -0.89067,0.20883 -1.09658,0.13431 -0.6918,-0.25036 z m 7.56782,0.28244 c -0.54616,-0.37301 -0.58202,-0.55349 -0.11795,-0.59366 1.16972,-0.10121 1.45464,-0.17831 2.10682,-0.57011 0.35108,-0.21092 0.8044,-0.0988 1.00737,0.24911 0.23048,0.39508 0.1421,0.48422 -0.2354,0.23741 -0.35817,-0.23416 -0.61305,-0.0573 -0.62557,0.43409 -0.0238,0.93563 -0.96451,1.04275 -2.13527,0.24316 z m -2.70842,-1.26708 c 0.41282,-0.39233 0.80164,-0.41167 1.13899,-0.0567 0.33735,0.35498 0.12339,0.55833 -0.62679,0.59565 -0.85784,0.0427 -0.98427,-0.0904 -0.5122,-0.53897 z m 13.58482,-7.80199 c 0.0116,-0.4561 0.25672,-0.67525 0.54468,-0.48698 0.28795,0.18826 0.51781,0.56754 0.51079,0.84283 -0.007,0.27529 -0.25211,0.49443 -0.54466,0.48698 -0.29257,-0.007 -0.52242,-0.38673 -0.51081,-0.84283 z m 0.81814,-8.87524 c 0.9096,-1.64506 1.00163,-1.69122 0.87517,-0.43897 -0.0616,0.60938 -0.42909,1.22051 -0.81677,1.35805 -0.56272,0.19965 -0.5745,0.0143 -0.0584,-0.91908 z m 3.66374,-19.43404 c -0.44501,-0.29095 -0.1882,-0.53489 0.79501,-0.7552 1.78219,-0.39936 2.12301,-0.14805 0.83178,0.61333 -0.53319,0.3144 -1.26525,0.37825 -1.62679,0.14187 z m 11.66427,-35.70804 c 0.18126,-0.17226 0.64052,-0.17946 1.0206,-0.016 0.42,0.18061 0.29075,0.30344 -0.32956,0.31317 -0.56132,0.009 -0.87229,-0.1249 -0.69104,-0.29715 z m 1.64998,-2.08706 c 0.18125,-0.17225 0.64052,-0.17945 1.02059,-0.016 0.42,0.18061 0.29075,0.30345 -0.32956,0.31318 -0.56132,0.009 -0.87229,-0.12491 -0.69103,-0.29717 z m 9.64617,-6.57397 c -0.009,-0.56132 0.12491,-0.87229 0.29716,-0.69104 0.17225,0.18126 0.17946,0.64053 0.016,1.0206 -0.18061,0.42 -0.30345,0.29075 -0.31318,-0.32956 z m 19.32849,-29.09294 c -0.47152,-0.32204 -0.5318,-0.53278 -0.15103,-0.52797 0.34854,0.005 0.77557,0.25113 0.94892,0.54829 0.39132,0.67079 0.20718,0.66611 -0.79789,-0.0203 z"
              id="path2987"
              style={{ fill: "#ebe0d7" }}
            />
          </svg>
          <SlSpeech size={38} className="text-gray-700 z-10" />
        </div>
        <p className="text-gray-800 text-balance">
          Hear from our satisfied clients and students about their experiences
          with our services and how we've helped them achieve their goals.
        </p>
        <section className="mt-20 testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Testimonials;

const Testimonial = ({
  client,
  subject,
  school,
  year,
  grade_jump,
  testimonial,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [fadeInClass, setFadeInClass] = useState("");

  useEffect(() => {
    // Set a random delay between 0.3s and 0.8s
    const delay = Math.floor(Math.random() * 500) + 300;

    const timer = setTimeout(() => {
      if (inView) setFadeInClass("fade-in");
    }, delay);

    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`relative testimonial-item bg-[#ebe0d7] rounded-lg mb-10 w-full opacity-0 ${fadeInClass}
      `}
    >
      <div className="absolute top-[-15%] w-fit right-0 left-0 mx-auto border-2 rounded-full border-gray-600">
        <Image src={about} width={80} className="rounded-full" alt={client} />
      </div>
      <div className="pt-[15%] px-2">
        <p className="text-lg ">
          {client} ({school}), {subject}
        </p>
        <Image src={stars} width={150} className="mx-auto" alt="Rating" />
        <p className="mb-5 italic">&ldquo;{testimonial}&rdquo;</p>

        {school !== "Parent" && (
          <p className="m-5">
            {grade_jump} ({year})
          </p>
        )}
      </div>
    </div>
  );
};
