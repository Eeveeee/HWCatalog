const bd = {
  pc1: {
    name: 'Work',
    price: '',
    info:
      'CPU:AMD Ryzen Threadripper 3990X, GPU:RTX 3090 FEx2, RAM:512gb DDR4 G.Skill Trident, PCU: Seasonic 1200w Platinum, SSD: 2tb Samsung EVO 960x4, Motherboard: Asus Zenith sTRX4, Cooler:Cooler Master Wraith Ripper sTRX4, Case: Cooler Master Cosmos',
    img: '../images/home/work-pc.webp',
    type: 'work',
  },
  pc2: {
    name: 'Gaming',
    price: '',
    info:
      'CPU:AMD Ryzen 9 5950X, GPU:RTX 3080 FE, RAM:32gb DDR4 G.Skill Ripjaws, PCU: Super Flower 700w Platinum, SSD: 1tb Samsung EVO 960x2, Motherboard: Asrock Taichi X570, Cooler:Noctua NH-15, Case: Deepcool Matrex 70',
    img: '../images/home/gaming-pc.webp',
    type: 'gaming',
  },
  pc3: {
    name: 'Office',
    price: '',
    info:
      'CPU:AMD Ryzen 5 PRO 4650G, GPU: IGP,, RAM:8gb DDR4 Samsung, 300w FSP, HDD: 500GB WD Blue, Motherboard: Asrock B450, Cooler:BOX, Case:DEXP DC-202M',
    img: '../images/home/office-pc.webp',
    type: 'office',
  },
}
function renderGoods(goods) {}
function filter(type, by = '-') {}
export function catalogPage(render, addListener, changeLink, catalogPageHTML) {
  const bd = {
    pc1: {
      name: 'Work',
      price: '',
      info:
        'CPU:AMD Ryzen Threadripper 3990X, GPU:RTX 3090 FEx2, RAM:512gb DDR4 G.Skill Trident, PCU: Seasonic 1200w Platinum, SSD: 2tb Samsung EVO 960x4, Motherboard: Asus Zenith sTRX4, Cooler:Cooler Master Wraith Ripper sTRX4, Case: Cooler Master Cosmos',
      img: '../images/home/work-pc.webp',
      type: 'work',
    },
    pc2: {
      name: 'Gaming',
      price: '',
      info:
        'CPU:AMD Ryzen 9 5950X, GPU:RTX 3080 FE, RAM:32gb DDR4 G.Skill Ripjaws, PCU: Super Flower 700w Platinum, SSD: 1tb Samsung EVO 960x2, Motherboard: Asrock Taichi X570, Cooler:Noctua NH-15, Case: Deepcool Matrex 70',
      img: '../images/home/gaming-pc.webp',
      type: 'gaming',
    },
    pc3: {
      name: 'Office',
      price: '',
      info:
        'CPU:AMD Ryzen 5 PRO 4650G, GPU: IGP,, RAM:8gb DDR4 Samsung, 300w FSP, HDD: 500GB WD Blue, Motherboard: Asrock B450, Cooler:BOX, Case:DEXP DC-202M',
      img: '../images/home/office-pc.webp',
      type: 'office',
    },
  }
  Object.keys(bd).forEach((key) => {
    console.log(key)
  })

  render(catalogPageHTML)
}
