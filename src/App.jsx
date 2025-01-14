import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heading, ClickHintText, Toolbar } from './components';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffefef');
  const [dotColor, setDotColor] = useState('#ec1111');
  const [showInitialElements, setShowInitialElements] = useState(true);

  return (
    <main
      onClick={() => setShowInitialElements(false)}
      className="mx-auto flex h-svh min-h-screen w-full flex-col items-center justify-center gap-5 overflow-hidden w-xs:justify-normal"
      style={{
        backgroundColor: backgroundColor,
        backgroundImage: `radial-gradient(${dotColor} 2px, transparent 2px), 
                           radial-gradient(${dotColor} 2px, ${backgroundColor} 2px)`,
        backgroundSize: '100px 100px',
        backgroundPosition: '0 0, 50px 50px',
        '--accent-maroon': `color-mix(in srgb, ${dotColor}, #540F0F)`,
        '--muted': `color-mix(in srgb, ${dotColor}, #000000 50%)`,
        '--highlight': `color-mix(in srgb, ${backgroundColor}, rgba(0,0,0,0.1))`,
      }}
    >
      <AnimatePresence>
        {showInitialElements && (
          <>
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.2 }}
            >
              <ClickHintText />
            </motion.div>
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Heading />
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <Toolbar backgroundProps={{ backgroundColor, dotColor, setBackgroundColor, setDotColor }} />
    </main>
  );
}

export default App;
