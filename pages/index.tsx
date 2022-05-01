import type { GetServerSideProps, NextPage } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        redirect: {
            destination: "/wordle",
        },
        props: {},
    }
}

const Home: NextPage = () => {
    return <div></div>
}

export default Home
