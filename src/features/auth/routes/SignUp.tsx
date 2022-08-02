import React from "react";
import { Box } from "components/Box/Box";
import { Button } from "components/Button/Button";
import { Center } from "components/Center/Center";
import { Container } from "components/Container/Container";
import { Divider } from "components/Divider/Divider";
import { Form } from "components/Form/Form";
import { VStack } from "components/Stack/VStack";
import { Text } from "components/Text/Text";
import { theme } from "utils/theme";

export const SignUp: React.FC = () => {
	const list = [
		{
			text: "Nick name",
			placeholder: "Nick name",
		},
		{
			text: "Country",
			placeholder: "Country",
		},
		{
			text: "City",
			placeholder: "City",
		},
		{ text: "Email", type: "email", placeholder: "mail@example.com" },
		{
			text: "Password(min 6 characters)",
			type: "password",
			placeholder: "abc123",
		},
	];
	return (
		<Center h={theme.h.full}>
			<VStack mb={100} w={theme.w.mobile}>
				<Text fontSize={theme.fs.h3}>SignUp</Text>
				<Container borderRadius={theme.borderRadius.md} border={theme.border}>
					<Form list={list} />
					<Button
						isFullWidth
						mb={theme.m.sm}
						onClick={() => {
							console.log("onClick");
						}}
					>
						Resister
					</Button>
					<Divider mb={theme.m.sm} />
					<Box textAlign="center">
						<Text
							display="inline-block"
							cursor={"pointer"}
							mb={theme.m.sm}
							borderBottom={theme.border}
							onClick={() => {
								console.log("onClick");
							}}
						>
							Login
						</Text>
					</Box>
				</Container>
			</VStack>
		</Center>
	);
};