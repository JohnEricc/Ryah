import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { EntryFlow } from './components/EntryGate'
import Flowers from './pages/Flowers'
import Home from './pages/Home'
import Letters from './pages/Letters'
import MyWhys from './pages/MyWhys'
import OurPictures from './pages/OurPictures'
import YourPictures from './pages/YourPictures'

export default function App() {
  return (
    <BrowserRouter>
      <EntryFlow>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/our-pictures" element={<OurPictures />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/your-pictures" element={<YourPictures />} />
          <Route path="/my-whys" element={<MyWhys />} />
          <Route path="/flowers" element={<Flowers />} />
        </Routes>
      </EntryFlow>
    </BrowserRouter>
  )
}
