import Layout from "@/src/components/Layout";
import Container from "@/src/components/container/Container";
import Heading from "@/src/components/heading/Heading";
import { IPage } from "@/src/types/page.interface";
import Image from "next/image";
import { FC } from "react";

interface ICGB {
	page: IPage;
}

const CGB: FC<ICGB> = ({ page }) => {
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
