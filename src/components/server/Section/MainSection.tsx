export const MainSection = ({ children, variant, id }: any) => {
    return (
        <section id={id} className={`${variant} p-[56px] h-[100vh]`}>
            {children}
        </section>
    )
}