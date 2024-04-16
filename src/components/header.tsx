import heartIcon from '../assets/heart.png'
import instructionsIcon from '../assets/book.png'
import { useInstructionsModal } from '../store/use-instructions-modal'

export const Header = ({ lives }: { lives: number }) => {
  const { open } = useInstructionsModal()
  return (
    <>
      <div className="absolute top-5 left-5 flex gap-2 items-end">
        <img
          style={{
            imageRendering: 'pixelated',
          }}
          src={heartIcon}
          alt="Heart"
          className="w-6 h-6 md:w-14 md:h-14"
        />
        x{lives}
      </div>

      <button
        className="absolute top-3 right-5 md:right-auto md:top-24 md:left-3 p-2 rounded-lg flex flex-col hover:scale-105 focus:scale-105"
        aria-label="Open Instructions Modal"
        onClick={() => open()}
      >
        <img
          style={{ imageRendering: 'pixelated' }}
          src={instructionsIcon}
          alt="Book Icon"
          className="w-7 h-7 md:w-14 md:h-14"
        />
        Help?
      </button>
      <div className="hidden absolute top-8 right-5 lg:flex items-center gap-3">
        Check also these other games:
        <div className="flex items-center gap-4">
          <a
            className="flex hover:scale-105 focus:scale-105"
            title="Open the game Guess the character on a new tab"
            target="_blank"
            href="https://ts-guess-the-character.vercel.app/"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
              <g transform="translate(0,0)">
                <path
                  d="M255 45.4c-24.5 0-47 11.8-63.9 33.4-16.9 21.5-27.1 52.6-27.1 86.5 0 36 12.1 67.5 31 89.5l13.5 15-19.6 4.6c-52.3 11.9-77.4 36.9-91.75 75.2-13.7 35.7-15.6 84.8-16.1 143.3H431c-.2-58.7-.5-109.3-13-145.5-13.4-39.4-37.9-64.3-94-75.4l-19.9-3.7 12.9-15.7c17.7-21.9 28.8-52.6 28.8-87.5 0-33.9-10.3-64.9-27.2-86.3-16.8-21.7-39.3-33.6-63.6-33.4z"
                  fill="#fff"
                  fillOpacity="1"
                ></path>
              </g>
            </svg>
          </a>
          <a
            className="flex hover:scale-105 focus:scale-105"
            title="Open the game Hangman on a new tab"
            target="_blank"
            href="https://hangman-ts-gamma.vercel.app/"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
              <g transform="translate(0,0)">
                <path
                  d="M237 23v113.1l38 5.6V23h-38zm-34.5 126.2c-.3.2-.7.8-1.3 2C200 154 199 159 199 164c0 5 1 10 2.2 12.8.6 1.3 1.2 2 1.4 2.2h.1l106.8 15.8c.3-.2.7-.8 1.3-2C312 190 313 185 313 180c0-5-1-10-2.2-12.8-.6-1.3-1.2-2-1.4-2.2h-.1l-106.8-15.8zm0 48c-.3.2-.7.8-1.3 2C200 202 199 207 199 212c0 5 1 10 2.2 12.8.6 1.3 1.2 2 1.4 2.2h.1l106.8 15.8c.3-.2.7-.8 1.3-2C312 238 313 233 313 228c0-5-1-10-2.2-12.8-.6-1.3-1.2-2-1.4-2.2h-.1l-106.8-15.8zm3.1 48.4c-5.2 6.5-10.5 13.3-15.9 20.6-26.3 35.8-54.3 79.4-47.5 122.6 4.2 26.7 19.5 51.4 39.8 70.4 20.2 19 46.1 32.8 74 32.8s53.8-13.8 74-32.8c20.3-19 35.6-43.7 39.8-70.4 6.8-43.2-21.2-86.8-47.5-122.6-1.7-2.4-3.4-4.6-5.1-6.9-2.2 1.1-4.7 1.7-7.2 1.7h-.7l-42.2-6.3c7.7 8.9 16.6 19.7 26.2 32.8 24.3 33.2 44.3 74.6 40.9 95.7-2.6 16.2-13.6 35.5-28.8 49.8-15.2 14.2-33.9 23-49.4 23s-34.2-8.8-49.4-23c-15.2-14.3-26.2-33.6-28.8-49.8-3.4-21.1 16.6-62.5 40.9-95.7 10.6-14.5 20.4-26.3 28.7-35.7l-41.8-6.2z"
                  fill="#fff"
                  fillOpacity="1"
                ></path>
              </g>
            </svg>
          </a>
          <a
            className="flex hover:scale-105 focus:scale-105"
            title="Open the game Minesweeper on a new tab"
            target="_blank"
            href="https://minesweeper-ts-xi.vercel.app/"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 0h512v512H0z" fill="#000" fillOpacity="1"></path>
              <g transform="translate(0,0)">
                <path
                  d="M287.586 15.297l3.504 110.963 31.537-110.963h-35.04zm-95.78.238l-1.75 236.047-170.533-43.33L130.486 377.69l-88.77-5.174 114.432 112.357-44.466-75.867L186.896 417l-51.748-109.94 110.114 79.956-12.635-185.23.002.003 75.212 170.57 75.816-89.95-6.62 154.582 60.173-39.978-20.388 79.486 75.756-142.787-75.924 1.94L487.32 155.87l-131.402 73.08-12.264-139.69-65.41 140.336-86.435-214.06h-.003zM45.503 44.095L39.355 75.94 154.285 218h.002l-77.6-166.836-31.185-7.07zm422.27 24.776l-31.184 7.07-43.738 107.37 81.068-82.59-6.147-31.85zM279.208 403.61c-40.176 0-72.708 32.537-72.708 72.71 0 5.725.636 10.706 1.887 16.05 7.25-32.545 36.097-56.655 70.82-56.655 34.82 0 63.673 23.97 70.82 56.656 1.218-5.277 1.888-10.404 1.888-16.05 0-40.175-32.536-72.71-72.71-72.71z"
                  fill="#fff"
                  fillOpacity="1"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
