import ThemeSwitcher from "@/components/theme-switcher"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted/50 transition-colors duration-500">
      <div className="flex flex-col items-center gap-8 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground transition-colors duration-500 sm:text-5xl">
          Module 6 - Guide 6
        </h1>
        <p className="max-w-md text-muted-foreground transition-colors duration-500">
          Toggle between light and dark mode
        </p>
        <ThemeSwitcher />
      </div>
    </main>
  )
}
