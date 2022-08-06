import React from "react";
import { WallContainer } from "components/Container";
import { Box, Text, VStack } from "components/Elements";
import { UserInfo } from "components/List";
import { theme } from "utils/theme";
import { Post } from "components/Post";
import { Search } from "components/Search";

export const Browse: React.FC = () => {
	return (
		<WallContainer page="Browse">
			<Box pt={theme.m.md}>
				<VStack spacing={theme.m.md}>
					<UserInfo />
					<Text textAlign="center">Search the other user by email</Text>
					<Search />
					<Post />
				</VStack>
			</Box>
		</WallContainer>
	);
};

export default Browse;
