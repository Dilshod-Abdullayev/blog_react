import React, { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";
const Header = () => {
  const { dark } = useContext(ModeContext);
  return (
    <div
      className={`${
        dark ? "bg-slate-900  text-white" : "bg-slate-50  text-sky-400"
      }`}
    >
      <div class="flex h-50vh justify-center items-center flex-col">
        <div class="w-full h-[50vh] bg-[url('https://img.freepik.com/free-vector/blue-futuristic-waves-background-with-computer-code-technology_53876-119584.jpg?w=1380&t=st=1680025288~exp=1680025888~hmac=d2844d4d4d7aeb0e5d56c8fcae780e62ba33b788e208c4feab769f1498302245')] bg-cover bg-center">
          <div class="pt-12 w-full h-full flex   items-center  flex-col backdrop-blur-md hover:backdrop-blur-none">
            <h1 className={`text-4xl `}>
              Salom
              <span className="text-5xl text-rose-500">Dilshod Abdullayev</span>
              ning blog saytiga xush kelibsiz!!
            </h1>
            <p className="w-3/4 text-3xl text-center mt-16">
              Bu blog saytimda IT haqidagi yangiliklar,ozimning amaliy
              ishlarimni va ko`pchilikka kerak boladigan codelarni topishingiz
              mumkin boladi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
