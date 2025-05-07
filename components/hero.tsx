export default function Header() {
  return (
    <div className="flex flex-col gap-8 items-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center">Artist Spotlight</h1>
      <p className="text-xl !leading-tight mx-auto max-w-xl text-center text-muted-foreground">
        Celebrating extraordinary artists and their creative contributions to the world of art
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
