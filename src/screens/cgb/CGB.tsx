import Layout from "@/src/components/Layout";
import Heading from "@/src/ui/heading/Heading";
import { IPage } from "@/src/types/page.interface";
import Image from "next/image";
import Container from "@/src/ui/container/Container";
import { useQuery } from "@apollo/client";
import { PageApollo } from "@/src/apollo/page.apollo";

const CGB = () => {
	const { data } = useQuery(PageApollo.GET_CGB);

	const page: IPage = data?.page;

	return (
		<Layout title={page.title}>
			<Container>
				<Heading>{page.title}</Heading>
				<div className="mb-10">
					<h2
						className="mb-4 font-bold"
						dangerouslySetInnerHTML={{ __html: page.rm.introTitle }}
					/>
					<div className="mb-4 text-neutral-500">
						<p>{page.rm.introDesc}</p>
					</div>
					<div
						style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
					>
						{page.rm.workList.map((item) => (
							<div key={item.workListImg.sourceUrl}>
								<div>{item.workListName}</div>
								<div>
									<Image
										src={item.workListImg.sourceUrl}
										width={300}
										height={300}
										alt={item.workListName}
										priority
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default CGB;
