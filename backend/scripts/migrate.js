const migrate = async () => {
    console.log('⚠️  Supabase Migration Notice ⚠️');
    console.log('-----------------------------------');
    console.log('The Supabase JS SDK does not support running raw SQL files directly.');
    console.log('Please copy the content of "database/schema.sql" and run it in your Supabase Dashboard SQL Editor.');
    console.log('-----------------------------------');
    process.exit(0);
};

migrate();
