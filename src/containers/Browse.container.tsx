import { usePost, useUser } from "application";
import { BrowseSection } from "components/Sections";

export const Browse = () => {
	const { models, operations: userOperations } = useUser();
	const { operations: postOperations } = usePost({});
	const { fetchUserByEmail } = userOperations;
	const { createPost } = postOperations;
	return (
		<BrowseSection
			user={models.data}
			actions={{ fetchUserByEmail, createPost }}
		/>
	);
};
