import { v4 as uuidv4 } from 'uuid'

let data = [
  {
    id: uuidv4(),
    thumbnail: '/assets/images/robo_fig_combo.jpg',
    title: 'robo_fig',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!',
    inStock: true,
    price: 12
  },

  {
    id: uuidv4(),
    thumbnail: '/assets/images/aplus-media.jpg',
    title: 'applus_media',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!',
    inStock: false,
    price: 10
  },

  {
    id: uuidv4(),
    thumbnail: '/assets/images/aplusautomation.jpg',
    title: 'aplusautomation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!',
    inStock: true,
    price: 5
  },

  {
    id: uuidv4(),
    thumbnail: '/assets/images/target-leap-frog.jpg',
    title: 'target_leap',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atdicta asperiores veniam repellat unde debitis quisquammagnam magni ut deleniti!',
    inStock: true,
    price: 7
  },

]

export default data