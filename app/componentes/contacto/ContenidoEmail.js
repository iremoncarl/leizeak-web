import { Body, Container, Head, Heading, Html, Preview, Section, Text, Tailwind } from "@react-email/components";

const ContenidoEmail = ({nombre, apellidos, emailRemitente, asunto, mensaje}) => {
	return (
		<Html lang="en" dir="ltr">
			<Head />
			<Tailwind>
				<Body className="font-sans">
					<Container className="bg-white rounded-[8px] max-w-[600px] mx-auto p-[40px]">
						{/* Header */}
						<Section className="text-center mb-[32px]">
							<Heading className="text-[20px] font-bold text-black m-0 mb-[16px]">
								Mensaje recibido desde página web
							</Heading>
						</Section>

						{/* Contenido principal */}
						<Section className="mb-[32px]">
							<Text className="text-[16px] text-gray-800 mb-[16px] leading-[24px]">
								Nombre remitente: {nombre}
							</Text>
							<Text className="text-[16px] text-gray-800 mb-[16px] leading-[24px]">
								Apellidos remitente: {apellidos}
							</Text>
							<Text className="text-[16px] text-gray-800 mb-[16px] leading-[24px]">
								Email remitente: {emailRemitente}
							</Text>
							<Text className="text-[16px] text-gray-800 mb-[16px] leading-[24px]">
								Asunto: {asunto}
							</Text>
							<Text className="text-[16px] text-gray-800 mb-[16px] leading-[24px]">
								Mensaje: {mensaje}
							</Text>
						</Section>					
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContenidoEmail;
