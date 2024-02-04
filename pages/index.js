import ReactCurvedText from "react-curved-text";

export default function Home() {
  return (
    <div className="font-main dark:bg-bg bg-white h-screen dark:text-white text-bg p-6 gap-10 grid grid-cols-4 grid-rows-6">
      <div className="bg-purple  row-span-2 rounded-2xl flex justify-center items-start overflow-hidden pt-6">
        <img src="https://static-cdn.icons8.com/l/3d/images/Person-2.webp" />
      </div>
      <div className="row-span-2 rounded-2xl flex justify-center items-center">
        <ReactCurvedText
          width={240}
          height={240}
          cx={120}
          cy={120}
          rx={100}
          ry={100}
          reversed
          startOffset={0}
          textPathProps={{fill: 'currentColor'}}
          textProps={{style: {fontSize: '18.2px'}}}
          svgProps={{className: 'dark:text-white text-bg'}}
          text="MORE CASES * MORE CASES * MORE CASES * MORE CASES * MORE CASES *"
        />
      </div>
      <div className="row-span-4 rounded-2xl flex flex-col justify-between p-6 dark:bg-light-gray bg-dark-white text-xl">
        <div className="flex flex-col gap-6">
          <p>CATEGORIES</p>
          <p>PAYMENT</p>
          <p>AUTHORS</p>
          <p>AUCTION</p>
          <p>SALES</p>
          <p>REVIEWS</p>
        </div>
        <p>CONTACTS</p>
      </div>
      <div className="bg-purple rounded-2xl flex items-center justify-evenly text-sm">
        <p className="whitespace-break-spaces text-center">{'Only exclusive \nillustrations'}</p>
        <p className="whitespace-break-spaces text-center">{'We do not sell \nworks on stock'}</p>
      </div>  
      <div className="rounded-2xl row-span-3 bg-green overflow-hidden pt-6">
        <img src="https://static-cdn.icons8.com/l/3d/images/Person-2.webp" />
      </div>
      <div className="rounded-2xl row-span-4 border-2 p-6 flex flex-col justify-between dark:border-white border-bg">
        <p className="dark:bg-white dark:text-bg bg-bg text-white p-6 rounded-2xl text-4xl text-center font-extrabold">
          BUTUSIC
        </p>
        <div>
          <div className="flex gap-6">
            <p className="bg-green text-bg h-10 w-10 flex justify-center items-center rounded-xl font-extrabold">B</p>
            <p className="whitespace-break-spaces">{'We accept more \nthan just bitcoins'}</p>
          </div>
          <div className="h-28 overflow-hidden flex justify-center w-full relative">
            <img className="w-full shrink-0 h-36 absolute top-0 brightness-0 dark:brightness-100" src='https://flaticons.net/icon.php?slug_category=shopping&slug_icon=barcode' />
          </div>
        </div>
      </div>
      <div className="dark:bg-light-gray bg-dark-white row-span-2 rounded-2xl flex flex-col justify-between items-start p-6">
        <p className="whitespace-break-spaces dark:text-accent text-light-gray text-sm">{'1217 PURRWEB \nSTREE, LA'}</p>
        <p className="whitespace-break-spaces dark:text-white font-bold">{"FIRST EXHIBITION OF \nILLUSTRATIONS OFFLINE"}</p>
        <p className="text-sm dark:text-accent text-light-gray">BUTISTIC.COM/EXHIBITION</p>
      </div>
      <div className="dark:bg-light-gray bg-dark-white rounded-2xl flex items-center justify-evenly text-xl font-extrabold rotate-3">
        RUNNIN'
      </div>
      <div className="col-span-2 row-span-2 justify-between dark:bg-white bg-bg rounded-2xl grid grid-cols-2 grid-rows-2 p-6 dark:text-bg text-white">
        <p className="text-4xl whitespace-break-spaces font-extrabold">{"ONLY THE BEST \nAUTHORS"}</p>
        <p className="text-9xl justify-self-end">4.97</p>
        <p className="self-end font-medium">184 guys with a unique vision</p>
        <div className="bg-purple place-self-end p-6 text-white py-2 rounded-xl">BEST REVIEWS</div>
      </div>
      <div className="bg-green rounded-2xl text-bg flex items-center justify-evenly">
        APPSTORE
      </div>
    </div>
  );
}
