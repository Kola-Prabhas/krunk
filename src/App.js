import './App.css';


const popularTags = [
	'Clutch',
	'Fabric lining',
	'Baggit',
	'Multi Modal'
];

const filterTags = [
	'Strap - Long',
	'Colour',
	'Size',
	'Brand',
	'Material'
];


function App() {
  return (
	  <div className="bg-gradient-to-br from-[#E6EEFF] from-20% to-[#E6EEFF00] py-8 ">
		  <div className="w-[360px] h-[800px] relative mx-auto rounded-[20px] py-2 px-2 bg-white">
			  <Header />
			  <Chat />			  
			  <PopularTags />
			  <BagCard />
			  <Filters />
			  <Footer />
		  </div>     
    </div>
  );
}


function Header() {
	return ( 
		<div className="w-[340px] h-[80px] bg-[#EFF3FD] mx-auto rounded-t-[20px] flex items-center gap-[10px] px-[20px] py-[10px]">
			<img src="/chatbot.png" alt="chatbot" />
			<div className="w-[8px] h-[8px] bg-[#3FE225] rounded-[50%] absolute mt-8 ml-10"></div>
			<div>
				<div className='flex items-center space-x-2'>
					<p className='text-[#4C82EF] font-semibold text-lg'>Timpu</p>
					<img src='/ticks.png' alt="tick marks" />
				</div>
				<p className="text-[#4C82EF] font-medium text-[15px]">Chat assistant</p>
			</div>
			<div className="ml-auto mt-6 flex space-x-1 items-center">
				<div className="w-[8px] h-[8px] bg-[#3FE225] rounded-[50%]"></div>
				<p className="text-[#4C82EF] font-medium text-[15px]">Online</p>
			</div>
		</div>
	);
} 

function Chat() {
	return (
		<div className="pt-10 px-4 w-[350px] mx-auto space-y-6 mb-6">
			<div className="space-y-1 w-[220px]">
				<p className="bg-gradient-to-r from-[#E5EEFF] to-[#FFFFFF] px-[10px] py-[10px] rounded-[15px] text-[13px] font-normal text-[#333333]">
					Hi Sam! I am your personal shopping assistant , how can i help you today ?
				</p>
				<p className="text-[#333333] text-[10px] ml-2">4:45 PM</p>
			</div>

			<div className="space-y-1 w-[213px] ml-auto">
				<p className="bg-[#DCF7C5] px-[15px] py-[10px] rounded-[15px] text-[13px] text-[#333333]">
					I am looking for a hand bag, with long strap .
				</p>
				<p className="text-[#333333] text-[10px] text-right mr-2">4:46 PM</p>
			</div>


		</div>
	);
}

function BagCard() {
	return (
		<div className="px-4 space-y-1 mt-4">
			<div className="w-[250px] flex flex-col space-y-2 items-center bg-gradient-to-br from-50% from-[#E5EEFF] to-[#FAFCFF] p-[10px] rounded-[20px]">
				<div className="w-[230px] flex rounded-[10px] px-[10px] py-[10px] space-x-[11px] bg-white">
					<img src='/bag.png' alt="Bag" />

					<div className="flex flex-col items-center px-[5px] space-y-[7px]">
						<div className="flex items-center gap-[3.7px]">
							<p className="text-[13px] text-[#333333] font-semibold">Bags on Timpu</p>
							<img src='/ticks.png' alt='Ticks' />
						</div>
						<div className="flex items-center gap-[10px]">
							<p className="text-[#949494] text-[12px] ">1123 products</p>
							<img className="cursor-pointer" src='/chevron-right.svg' alt='Right Arrow' />
						</div>
					</div>
				</div>
				<p className='text-[#333333] text-[13px] w-[230px]'>
					Or set filter and help us choose the best bag for you.
				</p>

			</div>
			<p className="text-[#333333] text-[10px] ml-2">4:48 PM</p>

		</div>
	)
}

function PopularTags() {
	return (
		<div className="px-4 w-[350px] mx-auto space-y-4">
			<p className="text-[#949494] text-[13px]">Popular tags for handbag</p>
			<div className='flex'>
				<div className='w-[295px] flex space-x-4 overflow-hidden'>
					{
						popularTags.map(tag => {
							return (
								<div className="border-2 border-[#4C82EF] text-[#4C82EF] bg-[#F2F7FF] h-[30px] text-[13px] font-medium px-[10px] py-[5px] rounded-[5px]">{tag}</div>
							);
						})
					}

				</div>
				<img className="cursor-pointer" src='/chevron-right.png' alt="Right Arrow" />
			</div>

		</div>
	)
}

function Filters() {
	return (
		<div className="px-4 mt-2 w-[330px] space-y-2">
			<div className="flex items-center justify-between">
				<p className="text-[#949494] text-[13px]">Select filters</p>
				<div className="flex items-center gap-1 cursor-pointer">
					<img src='/sliders-horizontal.png' alt='Filters logo' />
					<p className="text-[#666666] text-[13px]">Filter</p>
				</div>
			</div>

			<div className="flex flex-wrap gap-[5px]">
				{
					filterTags.map((tag, index) => {
						return (
							<div className={`${index === 0 ? "text-[#4C82EF] border-[#4C82EF]" : "text-[#737373]"}  text-[13px] border  bg-[#F6F9FF] rounded-[5px] px-[5px] py-[2px]  cursor-pointer`}>
								{tag}
								{
									index === 0 ? (
										<img className="inline ml-2" src="/cross.svg" alt="cross mark" />
									) : (
										<img className="inline ml-2" src="/cross.png" alt='cross mark' />
									)
								}								
							</div>
						)
					})

				}
			</div>


		</div>
	)
}

function Footer() {
	return (
		<div className='w-[345px] h-[80px] absolute bottom-1 bg-gradient-to-br from-60% from-[#EFF3FD] to-[#EFF3FD00] flex flex-col  gap-[10px] items-center py-[5px] rounded-b-[20px]'>
			<div className="flex gap-1 ">
				<div className="relative">
					<input
						type="text"
						className="focus:outline-none placeholder:text-[#949494] text-[13px] border border-[#E3ECFF] w-[255px] h-[40px] rounded-[10px] pr-[35px] pl-[20px]"
						placeholder='Type your message'
					/>
					<img
						src='/paperclip.png'
						alt="paper clip"
						className="absolute right-[5px] top-2.5 cursor-pointer"
					/>

				</div>

				<div
					className="w-[70px] h-[40px] bg-[#4C82EF] flex items-center justify-center rounded-[10px] cursor-pointer"
				>
					<img src='/vector.png' alt='Arrow Right' />
				</div>
			</div>
			<p className="flex items-center gap-2">
				<span className="text-[#B1B1B1] text-[13px]">Powered by </span>
				<span className="text-[#7A7F8C] text-[13px] font-semibold cursor-pointer">Krunk.ai </span>
				<img className="cursor-pointer" src="/logo.svg" alt="Krunk ai" />
			</p>
		</div>
	)
}


export default App; 
