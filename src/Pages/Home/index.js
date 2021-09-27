import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faArrowRight,
  faDotCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Footer, Navbar } from "../../Components";

function Home() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6143267fd326717cb681c6aa/1ffn4son8";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  });

  return (
    <div className="Home">
      {/* ************** Header ************** */}
      <Navbar />
      <div className="navbar_image_content">
        <img className="background_image" src="/images/image1.jpg" alt="" />
        <header>
          <div className="header_content">
            <div className="headings">
              <h4>Looking to Develop Your</h4>
              <h1>Dream Mobile Application?</h1>
              <p>
                Build world-class digital products with a team of design,
                development, and strategy experts. All in one place.
              </p>
              <button type="button" className="btn build_button">
                let's build
              </button>
            </div>
          </div>
        </header>
      </div>
      {/* ************** Header end ************** */}

      {/* ************** Three divs ************** */}
      <div className="container-fluid three_divs_container">
        <div className="row justify-content-center three_rows">
          <div className="col-lg-3 col-md-6 col-12 mb-3 services">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="49.609"
              height="49.6"
              viewBox="0 0 49.609 49.6"
              extension-installed="true"
            >
              <g id="transparency" transform="translate(-103.453 -220.015)">
                <g id="Group_9188" data-name="Group 9188">
                  <path
                    id="Path_6039"
                    data-name="Path 6039"
                    d="M137.274,220.015a24.01,24.01,0,0,1,3.118.641c6.7,2.158,11.043,6.635,12.332,13.542a17.556,17.556,0,0,1-28.617,16.737c-.268-.22-.414-.268-.661.009-.374.421-.786.81-1.193,1.2a.391.391,0,0,0-.1.509,3.561,3.561,0,0,1-.854,4.24q-5.823,5.808-11.635,11.627a3.625,3.625,0,0,1-6.126-1.814,3.4,3.4,0,0,1,.947-3.248c1.312-1.333,2.642-2.649,3.965-3.971,2.554-2.555,5.118-5.1,7.659-7.667a3.6,3.6,0,0,1,4.312-.911.422.422,0,0,0,.543-.141q.935-.947,1.88-1.882c.658-.654,1.069-.68,1.732-.052a15.717,15.717,0,0,0,26.636-11.215,15.7,15.7,0,1,0-29.468,7.495,1.034,1.034,0,0,1,0,1.181.892.892,0,0,1-.945.345,1.108,1.108,0,0,1-.76-.685,17.619,17.619,0,0,1,13.462-25.874,2.507,2.507,0,0,0,.279-.066Zm-30.2,47.689a1.789,1.789,0,0,0,1.4-.653q5.741-5.745,11.486-11.486c.08-.08.16-.16.234-.245a1.7,1.7,0,0,0-.079-2.363,1.736,1.736,0,0,0-2.572.11q-5.779,5.775-11.555,11.555c-.079.08-.16.159-.231.246a1.736,1.736,0,0,0,1.317,2.836Z"
                    fill="#0ab842"
                  />
                  <path
                    id="Path_6040"
                    data-name="Path 6040"
                    d="M148.331,237.6a12.792,12.792,0,1,1-14.486-12.743,12.578,12.578,0,0,1,11.6,4.537,3.592,3.592,0,0,1,.371.506.911.911,0,0,1-.213,1.249.888.888,0,0,1-1.262-.127,19.723,19.723,0,0,0-1.543-1.665,10.936,10.936,0,1,0,3.213,5.024,1.476,1.476,0,0,1-.123-.8.9.9,0,0,1,.839-.751.887.887,0,0,1,.968.641,11.536,11.536,0,0,1,.635,3.067C148.352,236.885,148.331,237.241,148.331,237.6Z"
                    fill="#0ab842"
                  />
                </g>
              </g>
            </svg>
            <h3>transparent</h3>
            <p>
              As mobile app development specialists, we completely understand
              transparency which is why we ensure to keep you involved in every
              step of our process and to drive engaging results.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-3 services">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59.074"
              height="55.66"
              viewBox="0 0 59.074 55.66"
              extension-installed="true"
            >
              <g id="impactful" transform="translate(-21.873 -216.901)">
                <path
                  id="Path_6041"
                  data-name="Path 6041"
                  d="M22.878,269.77a1.1,1.1,0,0,1-.644-.229,1.544,1.544,0,0,1-.213-.2l-.083-.083-.065-.187v-.817l.175-.151a1.788,1.788,0,0,1,.215-.175,1.114,1.114,0,0,1,.612-.2.97.97,0,0,1,.73.354.954.954,0,0,1-.021,1.362A.966.966,0,0,1,22.878,269.77Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6042"
                  data-name="Path 6042"
                  d="M22.156,268.386a2.73,2.73,0,0,1,.262-.22.689.689,0,0,1,.976.105.667.667,0,0,1-.014.977.686.686,0,0,1-.98.062,2.114,2.114,0,0,1-.244-.239Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6043"
                  data-name="Path 6043"
                  d="M28.475,269.812a2.783,2.783,0,0,1-.534-.041,1,1,0,0,1-.884-1.028.986.986,0,0,1,.905-1,1.091,1.091,0,0,1,.314-.045,2.5,2.5,0,0,1,.307.027,1.623,1.623,0,0,0,.211.021c.131-.1.095-.313.065-.483a2.888,2.888,0,0,1-.051-.449q-.009-2.184,0-4.366l0-10.7c0-1.172-.008-2.344.013-3.515a2.7,2.7,0,0,1,2.66-2.768c.646-.023,1.293-.03,1.941-.03l3.926.008c.612,0,1.224,0,1.837.01a2.719,2.719,0,0,1,2.6,1.774c.013.03.024.063.035.1l.016-.028c.563-.962,1.128-1.9,1.693-2.829,1.38-2.277,2.808-4.633,3.981-7.074a4.636,4.636,0,0,0,.407-1.873,17.022,17.022,0,0,0-.046-1.765,12.6,12.6,0,0,1,.025-2.6,4.28,4.28,0,0,1,3.176-3.7,3.672,3.672,0,0,1,.962-.125,4.632,4.632,0,0,1,3.593,1.789,12.436,12.436,0,0,1,1.983,5.262l.055.261a13.724,13.724,0,0,1-.314,5.652c-.281,1.386-.606,2.707-1,4.292-.012.048-.018.084-.022.11.006,0,5.233-.01,7.8-.01l5.388.005a10.641,10.641,0,0,1,1.694.116,3,3,0,0,1,2.577,1.933,3.832,3.832,0,0,1-.522,3.676,3.6,3.6,0,0,1-1.121,1.052.533.533,0,0,0-.111.077c.008.008.023.039.059.089a3.955,3.955,0,0,1-1.348,5.819.708.708,0,0,0-.075.043c.009.011.022.031.042.057a3.855,3.855,0,0,1,.633,3.287,4.078,4.078,0,0,1-2.3,2.7.847.847,0,0,0-.144.074,3.722,3.722,0,0,1,.214,4.107c.123.009.246.012.369.012.205,0,.411-.009.617-.017s.426-.018.639-.018h.142c.292.006.585.008.878.008.5,0,1-.007,1.507-.013l1.141-.013c.992,0,1.35.541,1.358,1.047a.952.952,0,0,1-.272.7,1.45,1.45,0,0,1-1.063.369q-7.047.008-14.094.008Zm34.715-2.088q1.175,0,2.347-.01a1.838,1.838,0,0,0,1.809-1.109,1.871,1.871,0,0,0-.007-1.675A2.093,2.093,0,0,0,65.81,263.9c-.707-.125-1.075-.491-1.093-1.089a.871.871,0,0,1,.238-.641,1.413,1.413,0,0,1,1.023-.368h.839c.249,0,.5,0,.746-.021a1.913,1.913,0,0,0,0-3.82c-.943-.169-1.037-.769-1.008-1.111a1.06,1.06,0,0,1,1.157-.975c.138,0,.738,0,.738,0,.152,0,.306,0,.459-.006a1.9,1.9,0,0,0,.482-3.727l-.137-.039a2.058,2.058,0,0,1-.453-.167.942.942,0,0,1-.534-1.058.976.976,0,0,1,.833-.83,3.479,3.479,0,0,1,.518-.048c.059,0,.279.016.33.016a2.42,2.42,0,0,0,.693-.118,1.883,1.883,0,0,0,1.246-2.174c-.032-.212-.127-.858-1.586-.867l-14.787,0a3.508,3.508,0,0,1-.8-.078,1.105,1.105,0,0,1-.753-.538,1.047,1.047,0,0,1-.027-.877,21.691,21.691,0,0,0,.827-2.994c.088-.388.175-.776.271-1.163.695-2.813,1.012-5.185.3-7.622l-.093-.317a6.241,6.241,0,0,0-1.646-3.221,2.256,2.256,0,0,0-1.476-.636,1.976,1.976,0,0,0-.624.106,2.016,2.016,0,0,0-1.486,1.63,7.331,7.331,0,0,0-.073,2.079,10.293,10.293,0,0,1-1.2,6.447l-.526.908c-1.2,2.068-2.434,4.206-3.7,6.281-.119.2-.232.4-.344.6a4.529,4.529,0,0,1-1.832,2.1c-.264.133-.344.3-.342.727q.017,3.49.008,6.98v8.565c-.01.271.005.274.1.294a6.258,6.258,0,0,1,2.278,1.147,2.413,2.413,0,0,0,1.428.456l9.419,0,.284-.012h1.275S62.14,267.724,63.19,267.724Zm-27.684-.012c1.12,0,2.24-.005,3.36-.029.891-.019,1.037-.177,1.037-1.129q.006-8.991,0-17.984c0-.832-.21-1.035-1.07-1.035H31.986c-.964,0-1.1.134-1.1,1.1l0,8.68.005,4.919c0,1.5,0,3,.008,4.5,0,.742.1.856.824.937a8.856,8.856,0,0,0,1,.043h.286Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6044"
                  data-name="Path 6044"
                  d="M68.712,267.97a14.964,14.964,0,0,0,2.149.02c1.177.024,2.355-.01,3.533-.017.668,0,1.066.283,1.074.768s-.38.783-1.053.784q-7.68.009-15.36.008-15.16,0-30.322-.006a3.952,3.952,0,0,1-.739-.034.721.721,0,0,1-.653-.747.7.7,0,0,1,.666-.727.27.27,0,0,0,.057-.008c.355-.132.86.2,1.062-.151.149-.256-.033-.694-.035-1.052-.007-1.917,0-3.835,0-5.753V253.19c0-1.651-.02-3.3.009-4.954a2.413,2.413,0,0,1,2.387-2.489c1.46-.054,2.923-.02,4.384-.021,1.1,0,2.2-.005,3.306.008a2.445,2.445,0,0,1,2.345,1.606c.058.13.049.339.236.356.169.015.255-.15.331-.28,1.921-3.284,4.021-6.464,5.673-9.9a4.937,4.937,0,0,0,.435-1.984,42.272,42.272,0,0,1-.024-4.331,4.018,4.018,0,0,1,2.97-3.464A4.231,4.231,0,0,1,55.4,229.3a12.748,12.748,0,0,1,1.985,5.409,13.415,13.415,0,0,1-.314,5.537c-.291,1.435-.644,2.858-1,4.279-.093.374-.012.463.361.462q6.537-.015,13.075-.005a10.2,10.2,0,0,1,1.649.113,2.743,2.743,0,0,1,2.356,1.748,3.535,3.535,0,0,1-.484,3.414,3.353,3.353,0,0,1-1.032.973c-.271.154-.343.3-.141.578a3.673,3.673,0,0,1-1.245,5.4c-.267.133-.323.271-.135.524a3.7,3.7,0,0,1-1.556,5.561c-.209.093-.389.173-.213.453a3.63,3.63,0,0,1,.012,4.09C68.7,267.86,68.712,267.9,68.712,267.97ZM55.5,268v-.012c.742,0,1.483,0,2.225,0,2.6.005,5.207.028,7.81.007a2.125,2.125,0,0,0,2.065-1.275,2.168,2.168,0,0,0-1.745-3.1c-.481-.085-.842-.284-.859-.819-.014-.441.366-.7.983-.716.533-.011,1.068.014,1.6-.023a2.173,2.173,0,0,0,2.06-2.455,2.209,2.209,0,0,0-2.025-1.927c-.471-.084-.818-.3-.775-.809.04-.492.407-.7.881-.715.4-.01.8,0,1.2-.009a2.188,2.188,0,0,0,.556-4.282,2.9,2.9,0,0,1-.537-.183.664.664,0,0,1-.393-.751.7.7,0,0,1,.6-.609,2.571,2.571,0,0,1,.624-.038,2.46,2.46,0,0,0,.956-.121,2.172,2.172,0,0,0,1.445-2.486q-.164-1.1-1.864-1.11H70.25q-7.367,0-14.733,0a3.3,3.3,0,0,1-.736-.07.735.735,0,0,1-.58-1.038,34.926,34.926,0,0,0,1.109-4.19,14.57,14.57,0,0,0,.294-7.769,7.093,7.093,0,0,0-1.824-3.672,2.331,2.331,0,0,0-2.376-.585,2.308,2.308,0,0,0-1.674,1.848,7.6,7.6,0,0,0-.077,2.158,10,10,0,0,1-1.162,6.276c-1.393,2.4-2.776,4.813-4.226,7.182-.578.945-.982,2.051-2.062,2.6a.928.928,0,0,0-.5.982c.014,3.083.007,6.167.007,9.25q0,3.084,0,6.168c0,.275-.074.612.321.7a6.07,6.07,0,0,1,2.174,1.1,2.71,2.71,0,0,0,1.6.508c1.6-.005,3.194,0,4.791,0ZM30.6,257.6h0q0,1.542,0,3.083c0,2.017,0,4.034.009,6.052,0,.886.216,1.12,1.075,1.217a9.7,9.7,0,0,0,1.079.045c2.034,0,4.068.017,6.1-.026,1.07-.023,1.314-.328,1.315-1.413q.006-8.992,0-17.984c0-.994-.336-1.318-1.353-1.319q-3.426,0-6.851,0c-1.115,0-1.379.265-1.38,1.383Q30.6,253.115,30.6,257.6Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6045"
                  data-name="Path 6045"
                  d="M38.079,243.984a1.911,1.911,0,0,1-.982-.34c-.257-.158-.525-.3-.793-.437-.289-.151-.578-.3-.855-.473a.761.761,0,0,0-.4-.13,1.063,1.063,0,0,0-.525.177,22.279,22.279,0,0,1-1.981,1.071,1.42,1.42,0,0,1-.586.131,1.218,1.218,0,0,1-.892-.38,1.415,1.415,0,0,1-.372-1.054l.111-.763c.087-.607.174-1.214.3-1.814a.648.648,0,0,0-.22-.7c-.494-.478-.962-.984-1.43-1.49l-.156-.168a1.314,1.314,0,0,1,.749-2.33c.746-.151,1.531-.25,2.163-.329a.715.715,0,0,0,.65-.512c.2-.483.423-.952.65-1.422.106-.22.213-.44.316-.66A1.25,1.25,0,0,1,35,231.543a1.384,1.384,0,0,1,1.281.838l.311.64c.242.491.483.983.693,1.488a.583.583,0,0,0,.534.409c.509.075,1.016.163,1.522.25l.676.116a1.4,1.4,0,0,1,1.2.957,1.37,1.37,0,0,1-.457,1.46c-.308.313-.61.631-.912.949-.247.261-.494.521-.745.779a.47.47,0,0,0-.135.475c.137.732.254,1.469.36,2.206a1.5,1.5,0,0,1-.546,1.66A1.291,1.291,0,0,1,38.079,243.984Zm-6.371-6.744.162.169c.3.311.59.622.908.907a1.343,1.343,0,0,1,.456,1.306c-.035.238-.083.475-.13.714a10.05,10.05,0,0,0-.166.994l.154-.081c.436-.227.851-.443,1.252-.683a1.341,1.341,0,0,1,.7-.224,1.206,1.206,0,0,1,.641.2c.4.248.822.464,1.274.7l.153.08V241.3a4.686,4.686,0,0,0-.152-.91,2.3,2.3,0,0,1,.9-2.686,3.977,3.977,0,0,0,.63-.6l-.238-.042c-.478-.086-.939-.17-1.4-.214a1.258,1.258,0,0,1-1.118-.839c-.19-.434-.4-.861-.622-1.323l-.066-.138-.073.149c-.252.512-.485.985-.707,1.463a1.059,1.059,0,0,1-.912.669c-.539.058-1.076.153-1.61.255a1.616,1.616,0,0,1-.164.018h-.012Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6046"
                  data-name="Path 6046"
                  d="M30.973,242.561c.129-.845.23-1.7.4-2.532a.925.925,0,0,0-.3-.957c-.546-.529-1.06-1.091-1.576-1.648a1.035,1.035,0,0,1,.6-1.859c.707-.144,1.426-.236,2.142-.326a.992.992,0,0,0,.877-.686c.287-.7.639-1.38.961-2.07a.974.974,0,0,1,.972-.655,1.072,1.072,0,0,1,.975.675c.335.7.7,1.4,1,2.115a.862.862,0,0,0,.755.58c.732.109,1.462.243,2.192.365a1.133,1.133,0,0,1,.978.768,1.093,1.093,0,0,1-.391,1.171c-.56.569-1.1,1.157-1.658,1.729a.75.75,0,0,0-.211.725c.136.728.253,1.461.358,2.2.075.518.113,1.042-.417,1.379a1.194,1.194,0,0,1-1.381-.128c-.534-.327-1.115-.58-1.648-.91a1.067,1.067,0,0,0-1.22.044,21.842,21.842,0,0,1-1.956,1.058A1.006,1.006,0,0,1,30.973,242.561Zm4.073-8.662c-.384.787-.722,1.458-1.039,2.139a.781.781,0,0,1-.685.507c-.548.06-1.092.156-1.633.258-.158.03-.4-.012-.454.164-.063.2.141.335.268.468.354.371.7.749,1.085,1.092a1.052,1.052,0,0,1,.365,1.054,13.728,13.728,0,0,0-.321,2.23c.662-.354,1.275-.653,1.857-1a.888.888,0,0,1,1.046-.025c.588.361,1.215.66,1.92,1.036a10,10,0,0,0-.228-1.512,2.043,2.043,0,0,1,.814-2.383,2.947,2.947,0,0,0,.9-1.031c-.723-.12-1.392-.266-2.069-.331a.978.978,0,0,1-.885-.67C35.713,235.257,35.4,234.636,35.046,233.9Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6047"
                  data-name="Path 6047"
                  d="M39.749,232.852a.993.993,0,0,1-.714-.3,1.462,1.462,0,0,1-.375-1.071c.014-.123.022-.218.031-.316a4.228,4.228,0,0,1,.124-.784.7.7,0,0,0-.29-.811,4.9,4.9,0,0,1-.767-.851,1.2,1.2,0,0,1-.173-1.074,1.239,1.239,0,0,1,.823-.766,2.31,2.31,0,0,1,.687-.133h0a1.081,1.081,0,0,0,1.2-.867,2.549,2.549,0,0,1,.286-.643,1.266,1.266,0,0,1,1.064-.654,1.236,1.236,0,0,1,1.032.625,8.344,8.344,0,0,1,.579,1.159.377.377,0,0,0,.354.284,6.6,6.6,0,0,1,1.172.193,1.345,1.345,0,0,1,.992.97,1.106,1.106,0,0,1-.409,1.1,2.141,2.141,0,0,0-.76,2.448,1.249,1.249,0,0,1-.2,1.079,1.074,1.074,0,0,1-.851.417,1.224,1.224,0,0,1-.659-.2,2.289,2.289,0,0,0-1.24-.425,2.317,2.317,0,0,0-1.243.424A1.227,1.227,0,0,1,39.749,232.852Zm1.894-3.01a1.391,1.391,0,0,1,.723.221,1.39,1.39,0,0,1,.474-1.451,1.469,1.469,0,0,1-1.183-.838,1.454,1.454,0,0,1-1.194.841,1.421,1.421,0,0,1,.5,1.43A1.307,1.307,0,0,1,41.643,229.842Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6048"
                  data-name="Path 6048"
                  d="M40.646,230.116c-.02.414.042.475.322.267a1.021,1.021,0,0,1,1.3-.044c.273.177.513.164.394-.251a1.127,1.127,0,0,1,.417-1.309c.244-.2.266-.4-.1-.438a1.188,1.188,0,0,1-1.139-.86c-.088-.264-.272-.281-.37-.006a1.2,1.2,0,0,1-1.191.871c-.3.013-.378.2-.121.392A1.147,1.147,0,0,1,40.646,230.116Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6049"
                  data-name="Path 6049"
                  d="M40.533,272.555l-.388,0c-.166,0-.332,0-.5-.01a1.188,1.188,0,0,1-.856-.357.926.926,0,0,1-.229-.7.993.993,0,0,1,1.071-.987c.412-.007.825-.009,1.238-.009q.7,0,1.4.01a1,1,0,0,1,1.067.991.921.921,0,0,1-.234.691,1.2,1.2,0,0,1-.861.362c-.171.007-.343.009-.515.009Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6050"
                  data-name="Path 6050"
                  d="M40.916,272.269c-.419,0-.838.015-1.256,0-.529-.024-.843-.314-.816-.754a.716.716,0,0,1,.793-.721q1.313-.018,2.625,0a.716.716,0,0,1,.788.726c.027.428-.306.732-.822.752-.437.017-.875,0-1.312,0Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6051"
                  data-name="Path 6051"
                  d="M61.743,272.56q-.636,0-1.273-.017a.966.966,0,0,1-1-1.01.986.986,0,0,1,1.04-1.025c.182-.007.364-.009.546-.009l1.229.006.4,0c.176,0,.351,0,.527.009a.968.968,0,0,1,1.019.97,1.016,1.016,0,0,1-.256.756,1.043,1.043,0,0,1-.754.3Q62.483,272.559,61.743,272.56Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6052"
                  data-name="Path 6052"
                  d="M61.89,270.791c.438,0,.875-.014,1.312,0a.732.732,0,1,1,.012,1.463c-.911.023-1.825.028-2.736,0a.682.682,0,0,1-.723-.726.7.7,0,0,1,.767-.743c.455-.017.912,0,1.368,0Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6053"
                  data-name="Path 6053"
                  d="M45.856,219.656a1.268,1.268,0,0,1-.89-.424,1.452,1.452,0,0,1-.386-1.047,1.332,1.332,0,0,1,1.354-1.284,1.426,1.426,0,0,1,1.014.438,1.311,1.311,0,0,1,.376.946,1.467,1.467,0,0,1-1.427,1.372Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6054"
                  data-name="Path 6054"
                  d="M47.04,218.277a1.181,1.181,0,0,1-1.174,1.1,1.113,1.113,0,0,1-1-1.174,1.053,1.053,0,0,1,1.088-1.013A1.1,1.1,0,0,1,47.04,218.277Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6055"
                  data-name="Path 6055"
                  d="M77.082,269.806a1.6,1.6,0,0,1-.594-.1.982.982,0,0,1-.687-1.027,1,1,0,0,1,.887-.951,5.149,5.149,0,0,1,.646-.039c.143,0,.286.005.428.013.7.041,1.1.413,1.11,1.021a1.049,1.049,0,0,1-1.058,1.07,1.716,1.716,0,0,1-.2.012l-.287-.007C77.252,269.8,77.167,269.806,77.082,269.806Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6056"
                  data-name="Path 6056"
                  d="M77.324,269.515a1.706,1.706,0,0,1-.731-.072.7.7,0,0,1-.51-.738.712.712,0,0,1,.642-.7,5.516,5.516,0,0,1,1.02-.023c.462.026.836.223.843.74s-.347.727-.809.786A3.631,3.631,0,0,1,77.324,269.515Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6057"
                  data-name="Path 6057"
                  d="M25.442,269.81a2.956,2.956,0,0,1-.625-.047,1.017,1.017,0,0,1-.888-1.084.984.984,0,0,1,.961-.949c.147-.016.294-.024.442-.032l.191-.01c.414.03,1.549.122,1.485,1.125-.028.455-.318,1-1.535,1Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6058"
                  data-name="Path 6058"
                  d="M25.541,267.971c.857.069,1.217.312,1.185.824-.031.492-.456.737-1.282.731a2.736,2.736,0,0,1-.566-.04.736.736,0,0,1-.666-.792.7.7,0,0,1,.709-.682C25.127,267.989,25.334,267.984,25.541,267.971Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6059"
                  data-name="Path 6059"
                  d="M26.209,241.79a.538.538,0,0,1-.412-.24l-.015-.019a.466.466,0,0,1-.388.247.483.483,0,0,1-.308-.122.419.419,0,0,1-.109-.546.423.423,0,0,1-.287-.127.506.506,0,0,1-.124-.386.417.417,0,0,1,.386-.434.442.442,0,0,1-.061-.3.5.5,0,0,1,.258-.342.528.528,0,0,1,.276-.086.436.436,0,0,1,.386.258.409.409,0,0,1,.365-.229.518.518,0,0,1,.28.091.481.481,0,0,1,.237.324.449.449,0,0,1-.047.279.411.411,0,0,1,.285.121.492.492,0,0,1,.124.373.44.44,0,0,1-.435.466.442.442,0,0,1-.17.6l-.067.041Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6060"
                  data-name="Path 6060"
                  d="M25.421,240.43c.056-.245-.491-.443-.124-.666.339-.206.238.358.558.394.18-.017.123-.57.449-.362s-.168.4-.112.628c.162.187.59-.194.58.222-.008.334-.374.111-.567.189-.065.157.079.236.132.346s.095.218-.033.3-.21-.008-.285-.1c-.111-.139-.174-.481-.414-.1-.076.121-.151.317-.339.162-.139-.114-.01-.241.054-.352.045-.078.092-.155.136-.23-.2-.162-.623.168-.607-.246C24.862,240.269,25.249,240.588,25.421,240.43Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6061"
                  data-name="Path 6061"
                  d="M77.289,221.723a1.118,1.118,0,0,1-.81-.387.934.934,0,0,1-.227-.723,1,1,0,0,1,1.029-.942h0a1,1,0,0,1,.745.356.979.979,0,0,1,.265.755,1.018,1.018,0,0,1-.967.94h-.036Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6062"
                  data-name="Path 6062"
                  d="M77.3,221.439a.758.758,0,0,1-.764-.79.722.722,0,0,1,.754-.7.781.781,0,0,1,.723.795A.731.731,0,0,1,77.3,221.439Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6063"
                  data-name="Path 6063"
                  d="M67.295,233.062a.467.467,0,0,1-.395-.232.479.479,0,0,1-.387.224h-.076l-.161-.067a.453.453,0,0,1-.226-.3.481.481,0,0,1,.07-.352.489.489,0,0,1-.292-.156.442.442,0,0,1-.091-.468.416.416,0,0,1,.367-.254h.01a1.783,1.783,0,0,1-.054-.184.443.443,0,0,1,.069-.389l.085-.1.2-.027a.687.687,0,0,1,.491.285.47.47,0,0,1,.4-.26.5.5,0,0,1,.277.092.45.45,0,0,1,.219.32.42.42,0,0,1-.073.287h.026c.332.126.343.346.321.465a.483.483,0,0,1-.383.382l.006.01a.454.454,0,0,1,.071.35.465.465,0,0,1-.209.3A.475.475,0,0,1,67.295,233.062Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6064"
                  data-name="Path 6064"
                  d="M66.9,231.466c.243-.086.242-.55.525-.361s-.189.345-.14.574c.1.112.248.015.369.061.074.028.158.065.142.148-.011.059-.085.151-.133.152-.4.011-.381.183-.2.45a.176.176,0,0,1-.056.252c-.124.08-.219.017-.281-.092-.133-.236-.261-.338-.426-.023-.054.1-.149.189-.279.115s-.106-.193-.032-.293c.195-.261.106-.37-.191-.389a.239.239,0,0,1-.152-.064c-.1-.12-.043-.248.08-.256.477-.031.273-.262.215-.527-.063-.288.224-.219.463.166A.505.505,0,0,0,66.9,231.466Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6065"
                  data-name="Path 6065"
                  d="M59.11,222.072a1,1,0,0,1-.948-.962,1.007,1.007,0,0,1,.263-.767.962.962,0,0,1,.7-.317,1.012,1.012,0,0,1,1.05,1,.954.954,0,0,1-.257.706,1.069,1.069,0,0,1-.772.34h-.019Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6066"
                  data-name="Path 6066"
                  d="M59.141,221.79a.74.74,0,0,1,.031-1.479.71.71,0,0,1,.722.732A.735.735,0,0,1,59.141,221.79Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6067"
                  data-name="Path 6067"
                  d="M63.654,241.563a1.068,1.068,0,0,1-.995-.971.979.979,0,0,1,.274-.714,1.146,1.146,0,0,1,.824-.351.971.971,0,0,1,.944,1,.983.983,0,0,1-.96,1.032Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6068"
                  data-name="Path 6068"
                  d="M63.762,239.811a.682.682,0,0,1,.656.722.707.707,0,0,1-.709.744.773.773,0,0,1-.767-.7A.785.785,0,0,1,63.762,239.811Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6069"
                  data-name="Path 6069"
                  d="M30.928,226.6a.932.932,0,0,1-.668-.292,1.044,1.044,0,0,1-.3-.75.949.949,0,0,1,.98-1h0a1.037,1.037,0,0,1,1.035,1.017,1.007,1.007,0,0,1-.944,1.014Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6070"
                  data-name="Path 6070"
                  d="M31.7,225.593a.725.725,0,1,1-1.45-.022.67.67,0,0,1,.709-.721A.746.746,0,0,1,31.7,225.593Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6071"
                  data-name="Path 6071"
                  d="M79.928,269.75a.933.933,0,0,1-.987-.983.963.963,0,0,1,.895-1.024h.013a1.108,1.108,0,0,1,.827.311.942.942,0,0,1,.271.686.952.952,0,0,1-.985,1.01Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6072"
                  data-name="Path 6072"
                  d="M79.872,268.024a.722.722,0,0,1,.792.71.675.675,0,0,1-.708.733.658.658,0,0,1-.731-.705A.681.681,0,0,1,79.872,268.024Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6073"
                  data-name="Path 6073"
                  d="M77.356,238.486c-.015.009-.053.027-.08.04a.725.725,0,0,1-.316.1.381.381,0,0,1-.379-.346.645.645,0,0,1-.01-.154h-.135l-.15-.19a.459.459,0,0,1-.02-.43l.081-.141.179-.01,0,.007a.34.34,0,0,0,.01-.082c.01-.14.041-.565.488-.565a.191.191,0,0,0,.346.053.5.5,0,0,1,.287-.088.4.4,0,0,1,.34.161l.083.126-.056.166c-.055.13-.075.179.164.294l.195.094-.039.218c-.019.1-.086.338-.308.36l-.016,0,.092.144-.081.211a.486.486,0,0,1-.39.239h-.209Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6074"
                  data-name="Path 6074"
                  d="M77.261,237.288c.191-.03.171-.217.277-.293.091-.066.251-.031.228.024-.147.349.019.523.3.66,0,0-.033.132-.057.134-.313.029-.42.136-.225.439.055.085-.148.186-.16.147-.172-.561-.7.212-.767-.173-.039-.222.154-.426-.253-.388-.1.009-.129-.207-.079-.2.512.037.1-.657.515-.639C77.121,237,77.192,237.191,77.261,237.288Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6075"
                  data-name="Path 6075"
                  d="M35.4,266.275a2.816,2.816,0,0,1-1.995-.851,2.676,2.676,0,0,1-.789-1.936,2.745,2.745,0,1,1,2.791,2.787Zm-.017-3.433a.646.646,0,0,0-.711.653.692.692,0,0,0,.182.515.717.717,0,0,0,.529.2.687.687,0,1,0,.014-1.373l-.014-.283Z"
                  fill="#0ab842"
                />
                <path
                  id="Path_6076"
                  data-name="Path 6076"
                  d="M37.825,263.555a2.429,2.429,0,0,1-2.415,2.436,2.515,2.515,0,0,1-2.507-2.5,2.469,2.469,0,0,1,2.566-2.428A2.43,2.43,0,0,1,37.825,263.555Zm-2.42-1a.933.933,0,0,0-1.013.928.949.949,0,0,0,.994,1.011.97.97,0,1,0,.019-1.939Z"
                  fill="#0ab842"
                />
              </g>
            </svg>
            <h3>impactful</h3>
            <p>
              As mobile app development specialists, we completely understand
              transparency which is why we ensure to keep you involved in every
              step of our process and to drive engaging results.
            </p>
          </div>
          <div
            className="col-lg-3 col-md-6 col-12 services"
            style={{ backgroundColor: "#00b53a", color: "#fff" }}
          >
            <h3>estimate</h3>
            <p>
              As mobile app development specialists, we completely understand
              transparency which is why we ensure to keep you involved in every
              step of our process and to drive engaging results.
            </p>
            <button type="button" className="btn start_button">
              get started <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
      {/* ************** Three divs end ************** */}

      {/* ************** About us ************** */}
      <section>
        <div className="container-fluid">
          <div className="row about_row row-cols-lg-2 row-cols-1 justify-content-evenly">
            <div className="col about_testimonial about_col">
              <img className="about_image" src="images/image3.jpg" alt="" />
              <div className="testimonial">
                <FontAwesomeIcon icon={faQuoteRight} className="quote_icon" />
                <div className="cone" />
                <p>
                  We eat, sleep, and breathe mobile. It’s who we are. We create
                  the kind of apps that people love &amp; are used over &amp;
                  over again.
                </p>
              </div>
            </div>
            <div className="col about_content about_col">
              <h2 className="about_us_heading">about us</h2>
              <h1>Turn ideas into revolutionary products &amp; services</h1>
              <p>
                We build affordable technology solutions for businesses, large
                &amp; small. By applying modern design principles along with the
                latest in mobile &amp; web technologies, we create tailored
                solutions that add value by connecting people with each other,
                businesses with their customers, and decision makers with
                valuable information, while simplifying business processes,
                accelerating production, and lowering costs.
              </p>
              <button
                type="button"
                className="btn btn-primary number about_button"
              >
                get started
              </button>
              <div className="checks">
                <div className="check_mark">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>We are committed to providing quality IT Services</p>
                </div>
                <div className="check_mark">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>We are committed to providing quality IT Services</p>
                </div>
                <div className="check_mark">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>We are committed to providing quality IT Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ************** About us end ************** */}

      {/* ************** Experience ************** */}
      <section>
        <div className="container experience">
          <h3>our experience</h3>
          <h1>Our Expertise in Multiple Industries</h1>
          <p>
            Our mobile application development experience varies across a
            variety of niches and business markets.
          </p>
          <div className="experience_lists">
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Business
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Entertainment
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Communication
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Social
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Finance
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Shopping
              </li>
            </ul>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Music &amp; Audio
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Auto &amp; Vehicle
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  style={{ color: "#00b53a", margin: "0 10px" }}
                />
                Health &amp; Fitness
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* ************** Experience end ************** */}

      {/* ************** Services ************** */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 service_col">
              <h3 className="service_heading">our services</h3>
              <h1 className="service_slogan">
                Customized Mobile Apps &amp; Digital Solutions
              </h1>
              <button
                type="button"
                className="btn btn-primary number about_button"
              >
                get started
              </button>
            </div>
            <div className="col-lg-4 service_col service_hover p-5">
              <img
                src="images/android@3x.png"
                width={60}
                className="mb-2"
                alt=""
              />
              <h3>Android Application Development</h3>
              <p className="experience_para">
                A group of certified android engineers devoted to building
                impactful applications to achieve your business goals.
              </p>
              <a href="#">
                discover more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="col-lg-4 service_col service_hover p-5">
              <img src="images/ios@3x.png" width={60} className="mb-2" alt="" />
              <h3>Android Application Development</h3>
              <p className="experience_para">
                A group of certified android engineers devoted to building
                impactful applications to achieve your business goals.
              </p>
              <a href="#">
                discover more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="col-lg-4 service_col service_hover p-5">
              <img
                src="images/web_development@3x.png"
                width={60}
                className="mb-2"
                alt=""
              />
              <h3>Android Application Development</h3>
              <p className="experience_para">
                A group of certified android engineers devoted to building
                impactful applications to achieve your business goals.
              </p>
              <a href="#">
                discover more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="col-lg-4 service_col service_hover p-5">
              <img
                src="images/game@3x.png"
                width={60}
                className="mb-2"
                alt=""
              />
              <h3>Android Application Development</h3>
              <p className="experience_para">
                A group of certified android engineers devoted to building
                impactful applications to achieve your business goals.
              </p>
              <a href="#">
                discover more <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
            <div className="col-lg-4 service_col service_image">
              <img
                src="images/business-people-working-together-1.jpg"
                className="service_hover_image"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* ************** Services end ************** */}

      {/* ************** Testimonials ************** */}
      <section className="testimonial_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-12 testimonial_image testimonial_col">
              <div className="contact_us_box">
                <h1>Since 2013</h1>
                <p>
                  We eat, sleep, and breathe mobile. It’s who we are. We make
                  the kind of apps that individuals cherish &amp; are utilized
                  over &amp; over again.
                </p>
                <a href>
                  contact us <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 col-12 testimonial_center"
              style={{ backgroundColor: "#091e2a", color: "#fff" }}
            >
              <h1>What Clients Say About Us</h1>
              <div className="circle">
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  style={{ fontSize: "45px", color: "#00b53a" }}
                />
              </div>
              <p className="client_testimonial">
                Appshah was hired to build a speech pathology social app. The
                iOS- and Android-compatible platform connects parents with
                pathologists, and features a forum, instant messaging, and
                profile creation abilities. They delivered everything I asked
                for.
              </p>
              <img src="images/if-min.jpg" alt="" className="ceo" />
              <p>
                <span className="name_heading">Jonathan Viverette</span>
                <br />
                CEO, iFollow Inc.
              </p>
            </div>
          </div>
        </div>
        <div className="contact_background_image">
          <h1>
            Don’t Hesitate To Contact Us For Better Information And Services
          </h1>
          <p>
            To ensure the privacy and confidentiality of your project, we sign
            an NDA (Non-Disclosure Agreement) before any business proceeding.
          </p>
        </div>
      </section>
      {/* ************** Testimonials end ************** */}

      {/* ************** Contact us ************** */}
      <div className="container contact_form">
        <div className="row contact_row">
          <div className="col-lg-6 col-12 contact_col contact_image">
            <h1>Perfect Solutions For Your Business</h1>
            <p className="contact_para">
              Fill in the form and tell us about your project. Our team will
              contact you promptly to discuss next steps.
            </p>
            <div className="contact_checks">
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>We are committed to providing quality IT Services</p>
              </div>
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>We are committed to providing quality IT Services</p>
              </div>
              <div className="contact_check_mark">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="contact_check_icon"
                />
                <p>We are committed to providing quality IT Services</p>
              </div>
            </div>
            <button type="button" className="btn btn-primary contact_button">
              03000000000
            </button>
          </div>
          <div className="col-lg-6 col-12 contact_col conatct_form_col">
            <div className="row">
              <div className="col form_col">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Your Name" id="name" />
              </div>
              <div className="col form_col">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Your Email" />
              </div>
            </div>
            <div className="row">
              <div className="col form_col">
                <label htmlFor="budget">Budget</label>
                <select name id="budget" className="budget_select">
                  <option value={0}>Range</option>
                  <option value="$1000-$3000">$1000-$3000</option>
                  <option value="$1000-$3000">$1000-$3000</option>
                  <option value="$1000-$3000">$1000-$3000</option>
                  <option value="$1000-$3000">$1000-$3000</option>
                </select>
              </div>
              <div className="col form_col">
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="Your Phone" />
              </div>
            </div>
            <div className="row">
              <div className="col form_col">
                <label htmlFor="details">Additional Details</label>
                <textarea
                  name
                  id="details"
                  rows={7}
                  placeholder="Additional Details"
                  style={{
                    padding: "15px 20px",
                    fontSize: "17px",
                    outline: "none",
                  }}
                  defaultValue={""}
                />
                <button
                  type="button"
                  className="btn btn-primary number about_button mt-5"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ************** Contact us end ************** */}

      {/* ************** Trusted companies ************** */}
      <section className="companies">
        <div className="trusted_companies">
          <h1>Trusted By The World’s Best Organizations</h1>
          <div className="container">
            <div className="row">
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
              <div className="col companies_col">
                <img src="images/gotcha.png" width={150} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ************** Trusted companies END ************** */}

      {/* ************** Footer ************** */}
      <Footer />
      {/* ************** Footer end ************** */}
    </div>
  );
}

export default Home;
