"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, useAnimation } from "framer-motion"

const funnyMessages = [
  "Reticulating splines...",
  "Generating witty dialog...",
  "Swapping time and space...",
  "Spinning violently around the y-axis...",
  "Tokenizing real life...",
  "Bending the spoon...",
  "Filtering morale...",
  "Don't think of purple hippos...",
  "We need a new fuse...",
  "Have a good day.",
  "Upgrading Windows, your PC will restart several times. Sit back and relax.",
  "640K ought to be enough for anybody",
  "The architects are still drafting",
  "The bits are breeding",
  "We're building the buildings as fast as we can",
  "Would you prefer chicken, steak, or tofu?",
  "(Pay no attention to the man behind the curtain)",
  "...and enjoy the elevator music...",
  "Please wait while the little elves draw your map",
  "Don't worry - a few bits tried to escape, but we caught them",
  "Would you like fries with that?",
  "Checking the gravitational constant in your locale...",
  "Go ahead -- hold your breath!",
  "...at least you're not on hold...",
  "Hum something loud while others stare",
  "You're not in Kansas any more",
  "The server is powered by a lemon and two electrodes.",
  "Please wait while a larger software vendor in Seattle takes over the world",
  "We're testing your patience",
  "As if you had any other choice",
  "Follow the white rabbit",
  "Why don't you order a sandwich?",
  "While the satellite moves into position",
  "keep calm and npm install",
  "The bits are flowing slowly today",
  "Dig on the 'X' for buried treasure... ARRR!",
  "It's still faster than you could draw it",
  "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
  "I should have had a V8 this morning.",
  "My other loading screen is much faster.",
  "Testing on Timmy... We're going to need another Timmy.",
  "Reconfoobling energymotron...",
  "(Insert quarter)",
  "Are we there yet?",
  "Have you lost weight?",
  "Just count to 10",
  "Why so serious?",
  "It's not you. It's me.",
  "Counting backwards from Infinity",
  "Don't panic...",
  "Embiggening Prototypes",
  "Do not run! We are your friends!",
  "Do you come here often?",
  "Warning: Don't set yourself on fire.",
  "We're making you a cookie.",
  "Creating time-loop inversion field",
  "Spinning the wheel of fortune...",
  "Loading the enchanted bunny...",
  "Computing chance of success",
  "I'm sorry Dave, I can't do that.",
  "Looking for exact change",
  "All your web browser are belong to us",
  "Should have used a compiled language...",
  "Is this Windows?",
  "Adjusting flux capacitor...",
  "Please wait until the sloth starts moving.",
  "Don't break your screen yet!",
  "I swear it's almost done.",
  "Let's take a mindfulness minute...",
  "Unicorns are at the end of this road, I promise.",
  "Listening for the sound of one hand clapping...",
  "Keeping all the 1's and removing all the 0's...",
  "Putting the icing on the cake. Let them eat cake!",
  "Cleaning off the cobwebs...",
  "Making sure all the i's have dots...",
  "We are not liable for any broken screens as a result of waiting.",
  "Dividing by zero...",
  "Cracking military-grade encryption...",
  "Simulating traveling salesman...",
  "Proving P=NP...",
  "Entangling superstrings...",
  "Searching for Waldo...",
  "Trying to sort in O(n)...",
  "Laughing at your pictures-i mean, loading...",
  "Sending data to NS-i mean, our servers.",
  "Looking for sense of humour, please hold on.",
  "A different error message? Finally, some progress!",
  "Hold on while we wrap up our git together...sorry",
  "Please hold on as we reheat our coffee",
  "Kindly hold on as we convert this bug to a feature...",
  "Distracted by cat gifs",
  "Finding someone to hold my beer",
  "BRB, working on my side project",
  "@todo Insert witty loading message",
  "Let's hope it's worth the wait",
  "Aw, snap! Not..",
  "Ordering 1s and 0s...",
  "Updating dependencies...",
  "Have a taco 🌮",
  "Feeding unicorns...",
]

const FancyLoadingBar = () => {
  const [progress, setProgress] = useState(0)
  const [isStuck, setIsStuck] = useState(false)
  const [message, setMessage] = useState("")
  const controls = useAnimation()

  const updateProgress = useCallback((elapsedTime: number) => {
    const totalDuration = 45000 // 45 seconds in milliseconds
    const newProgress = Math.min(99, (elapsedTime / totalDuration) * 100)
    setProgress(newProgress)

    if (newProgress >= 99) {
      setIsStuck(true)
    }
  }, [])

  useEffect(() => {
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      updateProgress(elapsedTime)

      if (Math.random() < 0.05) {
        // 5% chance to update message every 100ms
        setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)])
      }

      if (elapsedTime >= 45000) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [updateProgress])

  useEffect(() => {
    controls.start({ width: `${progress}%` })
  }, [progress, controls])

  return (
    <div className="w-full max-w-md">
      <div className="mb-4 text-center text-2xl font-bold text-white">Loading... {Math.floor(progress)}%</div>
      <div className="h-6 w-full rounded-full bg-gray-200 p-1">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
          initial={{ width: 0 }}
          animate={controls}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <motion.div
          className="h-3 w-3 rounded-full bg-purple-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-pink-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.33,
          }}
        />
        <motion.div
          className="h-3 w-3 rounded-full bg-red-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.66,
          }}
        />
      </div>
      <div className="mt-4 text-center text-lg text-yellow-300 animate-pulse min-h-[2em]">
        {isStuck ? "Almost there..." : message}
      </div>
    </div>
  )
}

export default FancyLoadingBar
